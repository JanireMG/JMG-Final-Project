import { useNavigate } from "react-router-dom";

import Btn from "./Btn";

export default function TopBanner({ title }) {
    const navigate= useNavigate();

    return (
        <div className="topBanner">
            <div className="leftCol">
                <Btn 
                    onBackClick={() => window.history.back()} 
                    onHomeClick={() => navigate("/")} 
                />
            </div>

            <div className="centerCol">
            <h1>{title || "AniGaua"}</h1>
            </div>

            <div className="rightCol">
                LOGIN
            </div>
        </div>
    );
}