import React from "react";
import HomeContainer from "./HomeContainer";
import Searchbar from "./Searchbar";
import TopBanner from "../ReutilizableFx/TopBanner";

export default function Home() {
    return (
        <div>
            <TopBanner showButtons= {false}/>
            <Searchbar />
            <HomeContainer />
        </div>
    )
}