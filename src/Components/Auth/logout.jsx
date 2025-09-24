import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Btn from "../ReutilizableFx/Btn";

export default function Logout({ setLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/logout",
                {},
                { withCredentials: true }
            );

            setLoggedIn(false);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Btn onLogoutClick={handleLogout}/>
    );
}