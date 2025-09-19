import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(5000, ()=> {
    console.log("Server en marcha");
});