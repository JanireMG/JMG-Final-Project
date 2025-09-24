import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: [ "http://localhost:5173", "http://127.0.0.1:5173" ],
    credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(session({
    secret:'asterisco1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    }
}));

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jan1r3m1997.",
    database: "final_project_db"
});

db.connect(err => {
    if (err) console.error("Error de conexión:", err);
    else console.log("Conexión a MySQL OK");
});

app.get("/", (req,res)=> {
    res.send("Server OK");
});

app.get("/api/session", (req, res) => {
    if (req.session.user) {
        res.json({ 
            loggedIn: true, 
            user: req.session.user }
        );
    }else {
        res.json({loggedIn: false});
    }
});

app.post("/api/login", (req,res) => {
    const { username, password } =  req.body;

    if (!username || !password) {
        return res
            .status(400)
            .json({
                success: false, 
                error: "Usuario o contrasña incorrecta"}
            );
    }

    const sql= `
        SELECT * FROM USERS WHERE USERNAME = ?
    `;
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.error("Error en DB:" , err);
            return res
                .status(500)
                .json({
                    success: false, 
                    error: "Error en la base de datos"}
                );
        }

        if (results.length === 0) {
            return res
                .status(401)
                .json({
                    success: false, 
                    error: "Usuario no encontrado"}
                );
        }

        const user = results[0];

        try{
            const match = await bcrypt.compare(password, user.USER_PASSWORD)

            if (!match) {
                return res
                    .status(401)
                    .json ({success: false, error: "Contraseña incorrecta"})
            }

            req.session.user = { id: user.USER_ID, username: user.USERNAME};

            res.json({
                success: true,
                message: "Login correcto",
                user: {
                    id: user.USER_ID,
                    firstname: user.FIRSTNAME,
                    username: user.USERNAME,
                    email: user.EMAIL
                },
            });
        } catch (compareErr) {
            console.error("Error en la comparacion de contraseña", compareErr);
            res.status (500)
                .json ({ 
                    success: false, 
                    error: "Error interno en el servidor" }
                );
        }
    })
    
})

app.post("/api/register", async (req,res)=> {
    const { firstname, username, email, password } = req.body;

    if(!firstname || !username || !email || !password ) {
        return res
            .status(400)
            .json({success: false, error: "Faltan campos por rellenar"});
    }

    try{
        const hashedPassword =  await bcrypt.hash(password, 10);

        const sql= `
            INSERT INTO USERS (FIRSTNAME, USERNAME, EMAIL, USER_PASSWORD)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql, [firstname, username, email, hashedPassword], (err, result) => {
            if(err) {
                console.error("Error en mysql", err);
                return res
                    .status(500)
                    .json({success: false, error: "Error al crear el usuario"});
            }
            res.json({ success: true, userId: result.insertId });
        });
    } catch (error) {
        console.error("Error interno:", error);
        res.status(500).json({success: false, error: "Error interno"});
    }
});

app.post("/api/logout", (req,res) => {
    if (req.session.user) {
        req.session.destroy(err => {
            if (err) {
                console.error(err);
                return res.status(500).json({success: false, error: "Error al cerrar sesión"})
            }
            res.clearCookie("connect.sid")  //limpiar cookies
            res.json({ success: true });
        });
    }else {
        res.status(400).json({ success: false, error: "Actualmente no hay sesión activa"})
    }
})

app.listen(5000, ()=> {
    console.log("Server en marcha");
});