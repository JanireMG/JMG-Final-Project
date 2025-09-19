import { useNavigate } from "react-router-dom";

import Btn from "./Btn";
import Login from "../Auth/login";

export default function TopBanner({ title, showButtons = true }) {
    const navigate= useNavigate();

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
            <h1>{title || "AniGaua"}</h1>
            </div>

            <div className="rightCol">
                <button onClick={() => navigate("/login")}>
                    Log In
                </button>
                <button onClick={() => navigate("/register")}>
                    Sign In
                </button>
            </div>
        </div>
    );
}