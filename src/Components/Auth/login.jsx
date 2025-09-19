import React, { Component } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { loginUser } from '../ReutilizableFx/Login/LoginUser';
import { registerUser } from '../ReutilizableFx/Login/RegisterUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from '../ReutilizableFx/Btn';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state= {
            firstname:"",
            username: "",
            email: "" ,
            password: "",
            errorText: "",
        };
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { navigate } = this.props

        const result= await loginUser(username,password);

        if(result.success) {
            this.setState({ errorText: ""});
            console.log("Login con exito", result.user)
            navigate("/");
        }else {
            this.setState({ errorText: result.error });
        }
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const { firstname, username, email, password } = this.state;
        const { navigate } = this.props

        const result= await registerUser(firstname, username, email, password);

        if(result.success) {
            this.setState({ errorText: ""});
            console.log("Usuario registrado", result.userId)
            navigate("/");
        }else {
            this.setState({ errorText: result.error });    
        }

    }
    
    render() {
        const { firstname, username, email, password, errorText} = this.state;
        const { location } = this.props;
        const activeForm = location.pathname === "/register" ? "register" : "login";

        return(
            <div>
                <Btn />
                {activeForm === "login" ? (
                    <form className='loginContainer'
                        onSubmit={this.handleLogin}>
                        <h2 className='loginTitle'>LOG IN</h2>
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
                        <button className='loginBtn'
                            type="submit">
                                Log In
                            </button>
                    </form>
                ) : (
                    <form className='registerContainer'
                        onSubmit={this.handleRegister}>
                        <h2 className='registerTitle'>SIGN IN</h2>
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
                        <button className='registerBtn'
                            type="submit">
                                Sign In
                        </button>
                    </form>
                )}
            </div>
        );
    }
}

export default function LoginWrapper() {
    const location = useLocation();
    const navigate = useNavigate();
    return <Login location={location} navigate={navigate} />;
}