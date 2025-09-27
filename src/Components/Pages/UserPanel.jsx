import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";

import TopBanner from "../ReutilizableFx/TopBanner";

export default function UserPanel() {
    const { user } = useOutletContext();

    return (
        <div>
            <TopBanner/>
            <h1>Welcome back {user.username}!</h1>

            <div className="userPanelVideo">
                <iframe
                    src="https://www.youtube.com/embed/NUYvbT6vTPs?autoplay=1&mute=1"
                    title="User Panel Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
    
}