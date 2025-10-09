import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import Btn from "./Btn";
import Logout from "../Auth/logout";

export default function TopBanner({ title = "AniGaua", showButtons = true }) {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useOutletContext();

    return (
        <div className="topBanner">
            <div className="leftCol">
                {showButtons && (
                    <Btn 
                        onBackClick={() => window.history.back()} 
                        onHomeClick={() => navigate("/")} 
                    />
                )}
            </div>

            <div className="centerCol">
                <h1>{title}</h1>
            </div>

            <div className="rightCol">
                {loggedIn ? (
                    <>
                        <Btn
                            onUserClick={() => navigate("/user-panel")}              
                        />  
                        <Logout setLoggedIn={setLoggedIn} />  
                    </>             
                ) : (
                    <Btn
                        onLoginClick={() => navigate("/login")}
                        onRegisterClick={() => navigate("/register")}
                    />
                    
                )}
            </div>
        </div>
    );
}