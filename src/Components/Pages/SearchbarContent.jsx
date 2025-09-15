import React, { Component } from "react";
import axios from "axios";

import AnimeList from '../ReutilizableFx/AnimeList';
import Searchbar from "./Searchbar";
import { withLocation } from "../ReutilizableFx/withLocation";


class SearchbarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            isLoading: true,
        };
    }
    
    handleFetchSearchResults = (searchQuery) => {
        if (!searchQuery) {
            this.setState({ searchResults: [], isLoading: false});
            return;
        }

        this.setState({ isLoading: true });

        axios
            .get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`)
            .then((response) => {
                this.setState({ 
                    searchResults: response.data.data, 
                    isLoading: false, 
                });
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
                this.setState({ isLoading: false });
            }
        );
    };

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const searchQuery = params.get('q') || '';
        this.handleFetchSearchResults(searchQuery);
    }

    componentDidUpdate(prevProps, prevState) {
        const params = new URLSearchParams(window.location.search);
        const currentQuery = params.get('q') || '';
        const prevParams = new URLSearchParams(prevProps.location?.search || '');
        const prevQuery = prevParams.get('q') || '';

        if (currentQuery && currentQuery !== prevQuery) {
            this.handleFetchSearchResults(currentQuery);
        }
    }

    render() {
        const { searchResults, isLoading } = this.state;

        return (
            <div className="searchResults">
                <Searchbar />
                <AnimeList 
                    animes={this.state.searchResults}
                    loading={this.state.isLoading}
                />
            </div>
        );
    }
}

export default withLocation(SearchbarContent);