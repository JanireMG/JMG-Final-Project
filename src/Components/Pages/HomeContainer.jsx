import React, { Component } from 'react';
import axios from 'axios';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            topAnimes: [],
            lastAnimes: [],
        }; 

    };

    handleGetTopAnimes = () => {
        axios
            .get('https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=10')
            .then((response) => {
                const topAnimes = response.data.data.slice(0, 9);
                this.setState({ topAnimes: topAnimes, isLoading: false });
            })
            .catch((error) => {
                console.error('Error fetching top ten animes:', error);
                this.setState({ isLoading: false });
            });
    };

    handleGetLastAnimes = () => {
        axios
            .get('https://api.jikan.moe/v4/seasons/now')
            .then((response) => {
                const lastAnimes = response.data.data.slice(0, 9);
                this.setState({ lastAnimes: lastAnimes, isLoading: false });
            }
            )
            .catch((error) => {
                console.error('Error fetching last animes:', error);
                this.setState({ isLoading: false });
            });
    };


    componentDidMount() {
        this.setState({ isLoading: true });
        this.handleGetTopAnimes();
        this.handleGetLastAnimes();
    }

    render() {
        const { isLoading, topAnimes, lastAnimes } = this.state;

        return (
            <div className='homeContainer'>
                <div className='animeColumns'>
                    <div className= 'leftSide'>
                        <div className='topAnimes'>
                            {this.topAnimes}
                            <h1>Top Animes</h1>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className='animeContainer'>
                                    {topAnimes.map((animeItem) => (
                                        <div className='animecontainerColumns' key={animeItem.mal_id}>
                                            {animeItem.title}<br></br>
                                                <img className='animeImg'
                                                    src={animeItem.images.jpg.image_url}
                                                    alt={animeItem.title}
                                                /><br></br>
                                            {animeItem.score}
                                        </div>
                                    ))}
                                </div>
                                )}
                        </div>
                    </div>
                    <div className='rightSide'> 
                        <div className='lastAnimes'>{this.lastAnimes}
                            <h1>Last Animes</h1>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className='animeContainer'>
                                    {lastAnimes.map((animeItem) => (
                                        <div className='animecontainerColumns' key={animeItem.mal_id}>
                                            {animeItem.title}<br></br>
                                                <img className='animeImg'
                                                    src={animeItem.images.jpg.image_url}
                                                    alt={animeItem.title}
                                                /><br></br>
                                            {animeItem.score}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}