import React from "react";
import HomeContainer from "./HomeContainer";
import Searchbar from "./Searchbar";

export default function Home() {
    return (
        <div>
            <h1 className="title">AniGaua</h1>
            <Searchbar />
            <HomeContainer />
        </div>
    )
}