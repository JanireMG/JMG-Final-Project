import React, { Component } from "react";
import axios from "axios";

import TopBanner from "../ReutilizableFx/TopBanner";
import NoDetails from "../ReutilizableFx/NoDetails";


export default class AnimeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeDetails: null,
            isLoading: true,
        };
    }

    handleFetchAnimeDetails = (animeId) => {
        axios
            .get(`https://api.jikan.moe/v4/anime/${animeId}`)
            .then((response) => {
                this.setState({ animeDetails: response.data.data, isLoading: false });
            })
            .catch((error) => {
                console.error('Error fetching anime details:', error);
                this.setState({ isLoading: false });
            }   
        );
    }

    componentDidMount() {
        const params= new URLSearchParams(window.location.search);
        const animeId = params.get('id') 
        if (animeId) {
            this.handleFetchAnimeDetails(animeId);
        }
    }

    render() {
        const { animeDetails, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (!animeDetails) {
            return <NoDetails/>;
        }

        return (
            <div>
                <TopBanner />
                <div className="animeDetailsContainer">
                    <div className="animeDetailsTitle">
                        <h1>{animeDetails.title}</h1>
                    </div>

                    <div className="animeDetailsImgSinopsis">
                        <img className="detailImg" 
                            src={animeDetails.images.jpg.image_url} 
                            alt={animeDetails.title} 
                        />
                        <p className="detailSinopsis">{animeDetails.synopsis}</p>
                    </div>

                    <div className="animeDetailsEpisodesScore">
                        <p>Episodes: {animeDetails.episodes}</p>
                        <p>Score: {animeDetails.score}</p>
                    </div>
                </div>
            </div>
        );
    }   
}   