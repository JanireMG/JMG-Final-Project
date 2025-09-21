import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "./Btn";

export default function TopBanner({ title, showButtons = true }) {
    const navigate = useNavigate();
    const { loggedIn } = useOutletContext();

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
                {loggedIn ? (
                    <FontAwesomeIcon icon="user" />
                ) : (
                    <>
                        <button onClick={() => navigate("/login")}>
                            Log In
                        </button>
                        <button onClick={() => navigate("/register")}>
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}