import React, { Component } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

import { loginUser } from '../ReutilizableFx/Login/LoginUser';
import { registerUser } from '../ReutilizableFx/Login/RegisterUser';
import TopBanner from "../ReutilizableFx/TopBanner";  
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
                    <Btn
                        onUserClick={() => this.props.navigate("/user-panel")}
                        onLogoutClick={this.props.handleLogout}
                    />
                ) : (
                    !loggedIn && activeForm !== 'login' && activeForm !== "register" && (
                        <Btn
                            onLoginClick={() => this.props.navigate("/login")}
                            onRegisterClick={() => this.props.navigate("/register")}
                        />
                    )
                )}

                {!loggedIn && activeForm === 'login' && (
                    <form 
                        onSubmit={this.handleLogin}>
                        <h2 className='h2Title'>LOG IN</h2>
                        <div className='loginContainer'>
                            <div>
                                <input className='inputBar' 
                                    type='text'
                                    name='username'
                                    value={username}
                                    placeholder='Enter your username'
                                    onChange={this.handleChange}
                                />
                            </div>
                            
                            <div>
                                <input className='inputBar'
                                    type='password'
                                    name='password'
                                    value={password}
                                    placeholder='Enter your password'
                                    onChange={this.handleChange}
                                />
                            </div>
                            {this.state.errorText && <p style={{ color: 'white' }}>{errorText}</p>}
                            <button className='btn'
                                type="submit">
                                Log In
                            </button>
                        </div>
                    </form>
                )}
                
                {!loggedIn && activeForm === "register" && (
                    <form
                        onSubmit={this.handleRegister}>
                        <h2 className='h2Title'>SIGN IN</h2>
                        <div className='registerContainer'>
                            <div>
                                <input className='inputBar'
                                    type='text'
                                    name='firstname'
                                    value={firstname}
                                    placeholder='Enter your name'
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <input className='inputBar'
                                    type='text'
                                    name='username'
                                    value={username}
                                    placeholder='Enter your username'
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <input className='inputBar'
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div>
                                <input className='inputBar'
                                    type='password'
                                    name='password'
                                    value={password}
                                    placeholder='Enter yor password'
                                    onChange={this.handleChange}
                                />
                            </div>
                        
                            <button className='btn'
                                type="submit">
                                    Sign In
                            </button>
                        </div>
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