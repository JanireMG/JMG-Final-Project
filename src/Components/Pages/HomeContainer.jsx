import React, { Component } from 'react';
import axios from 'axios';

import AnimeList from '../ReutilizableFx/AnimeList';

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
                        <AnimeList title="Top Animes" animes={topAnimes} loading={isLoading} />
                    </div>
                    <div className='rightSide'>
                        <AnimeList title="Last Animes" animes={lastAnimes} loading={isLoading} />
                    </div>
                </div>  
            </div>
        );
    }
}