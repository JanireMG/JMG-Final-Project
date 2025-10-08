import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../Helpers/icons";

Icons();

export default function Btn({ onBackClick, onHomeClick, onUserClick, onLogoutClick, onLoginClick, onRegisterClick}) {
    const navigate= useNavigate();
    return (
        <div>
            <div className="leftCol">
                {onHomeClick && (
                    <button onClick={onHomeClick} className="btn">
                        <FontAwesomeIcon icon= "house" />
                    </button>
                )}

                {onBackClick && (
                    <button onClick={onBackClick} className="btn">
                        <FontAwesomeIcon icon= "left-long" />
                    </button>
                )}
            </div>
            <div className="rightCol">
                {onUserClick && (
                    <button onClick={onUserClick} className="btn">
                        <FontAwesomeIcon icon= "user" />
                    </button>
                )}

                {onLogoutClick && (
                    <button onClick={onLogoutClick} className="btn">
                        <FontAwesomeIcon icon= "arrow-right-from-bracket" />
                    </button>
                )}

                {onLoginClick && (
                    <button className="btn" onClick={() => navigate("/login")}>
                        Log In
                    </button>
                )}

                {onRegisterClick && (
                    <button className="btn" onClick={() => navigate("/register")}>
                        Sign In
                    </button>
                )}
            </div>    
        </div>
    );
}
