import React, { Component } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

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

    componentDidMount() {
        axios
            .get(
                "http://localhost:5000/api/session", 
                { withCredentials: true }
            )
            .then(res => {
                if(res.data.loggedIn) {
                    this.props.setLoggedIn(true);
                    
                    this.setState({ 
                        username: res.data.user.username
                    });
                }
            })
            .catch(err => console.error("Error en la verificación de sesión", err));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { navigate, setLoggedIn } = this.props

        const result= await loginUser(username,password);

        if(result.success) {
            setLoggedIn(true);

            this.setState({ 
                errorText: "",
                username: result.user.username
            });
            navigate("/");
        }else {
            this.setState({ errorText: result.error });
        }
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const { firstname, username, email, password } = this.state;
        const { navigate, setLoggedIn } = this.props

        const result= await registerUser(firstname, username, email, password);

        if(result.success) {
            setLoggedIn(true);

            this.setState({ 
                errorText: "",
                username: username
            });
            navigate("/");
        }else {
            this.setState({ errorText: result.error });    
        }

    }
    
    render() {
        const { firstname, username, email, password, errorText} = this.state;
        const { location, loggedIn } = this.props;
        const activeForm = location.pathname === "/register" ? "register" : "login";

        return(
            <div>
                {loggedIn ? (
                    <FontAwesomeIcon icon="user"/>
                ) : (
                    <Btn />
                )}

                {!loggedIn && activeForm === "login" && (
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
                        {this.state.errorText && <p style={{ color: 'white' }}>{errorText}</p>}
                        <button className='loginBtn'
                            type="submit">
                                Log In
                            </button>
                    </form>
                )}
                
                {!loggedIn && activeForm === "register" && (
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
    const { loggedIn, setLoggedIn } = useOutletContext();

    return <Login location={location} navigate={navigate} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}