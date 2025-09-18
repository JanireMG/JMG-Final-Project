import React, { Component } from 'react';
import axios from 'axios';

import { loginUser } from '../ReutilizableFx/Login/LoginUser';
import { registerUser } from '../ReutilizableFx/Login/RegisterUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state= {
            firstname:"",
            username: "",
            email: "" ,
            password: "",
            errorText: "",
            activeForm: "login"
        };
    }

     handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSwitchForm = (form) => {
        this.setState({ activeForm:form, errorText:""});
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        const result= await loginUser(username,password);

        if(result.sucess) {
            this.setState({ errorText: ""});
            console.log("Login con exito", result.user)
        }else {
            this.setState({ errorText: result.error });
        }
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const { firstname, username, email, password } = this.state;

        const result= await registerUser(firstname, username, email, password);

        if(result.sucess) {
            this.setState({ errorText: ""});
            console.log("Usuario registrado", result.userId)
        }else {
            this.setState({ errorText: result.error });    
        }

    }
    
    render() {
        const { firstname, username, email, password, errorText, activeForm } = this.state;

        return(
            <div>
                <div>
                    <button onClick={() => this.handleSwitchForm("login")}>
                        Login
                    </button>

                    <button onClick={() => this.handleSwitchForm("register")}>
                        Register
                    </button>
                </div>

                {activeForm === "login" ? (
                    <form onSubmit={this.handleLogin}>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Introduce tu usuario'
                            onChange={this.handleChange}
                        />

                        <input
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Introduce tu contraseña'
                            onChange={this.handleChange}
                        />
                        {errorText && <p style={{ color: 'red' }}>{errorText}</p>}
                        <button type="submit">Iniciar sesión</button>
                    </form>
                ) : (
                    <form onSubmit={this.handleRegister}>
                        <input
                            type='text'
                            name='firstname'
                            value={firstname}
                            placeholder='Introduce tu nombre'
                            onChange={this.handleChange}
                        />

                        <input
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Introduce tu usuario'
                            onChange={this.handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Introduce tu email"
                            onChange={this.handleChange}
                        />

                        <input
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Introduce tu contraseña'
                            onChange={this.handleChange}
                        />
                        <button type="submit">Registrarse</button>
                    </form>
                )}
            </div>
        );
    }
}