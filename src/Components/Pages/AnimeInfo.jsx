import React, { Component } from "react";
import axios from "axios";


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
            .get(`https://api.jikan.moe/v4/anime/${animeId}/moreinfo`)
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
            return <p>No details available.</p>;
        }

        return (
            <div className="animeDetails">
                <h1>{animeDetails.title}</h1>
                <img className="animeImg" 
                    src={animeDetails.images?.jpg?.image_url} 
                    alt={animeDetails.title} 
                />
                <p>{animeDetails.synopsis}</p>  
                <p>Episodes: {animeDetails.episodes}</p>
                <p>Score: {animeDetails.score}</p>
                <p>Rating: {animeDetails.rating}</p>
                <p>Duration: {animeDetails.duration}</p>
                <p>Year: {animeDetails.year}</p>
                <p>Type: {animeDetails.type}</p>
            </div>
        );
    }   
}   