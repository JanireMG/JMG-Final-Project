import { useNavigate } from "react-router-dom";

import Btn from "./Btn";

export default function NoDetails(){
    const navigate= useNavigate();

    return(
        <div className="noDetailContainer">
            <h2>Ops! No hay detalles para mostrar.</h2>
            <h3>Prueba con otro anime</h3>
            <img 
                className="noDetailImg" 
                src="static/NoDetailImg/AnyaLupa.jpg"
            />
            <Btn className="noDetailBtn"
                onHomeClick={() => navigate("/")}
            />
        </div>
    )
}