import React, { Component } from "react";
import axios from "axios";

import AnimeList from '../ReutilizableFx/AnimeList';
import Searchbar from "../ReutilizableFx/Searchbar";
import { withLocation } from '../ReutilizableFx/withLocation';
import TopBanner from '../ReutilizableFx/TopBanner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SearchbarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            isLoading: true,
        };

        this.debounceTimeout = null;
        this.abortController = null;
    }
    
    handleFetchSearchResults = (searchQuery) => {
        if (!searchQuery) {
            this.setState({ searchResults: [], isLoading: false});
            return;
        }

        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }

        this.debounceTimeout = setTimeout(() =>{
            if (this.abortController){
                this.abortController.abort();
            }

            this.abortController = new AbortController(); 

            this.setState({ isLoading: true });

            axios
                .get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`,
                    { signal: this.abortController.signal }
                )
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
        }, 500);
    };

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const searchQuery = params.get('query') || '';
        this.handleFetchSearchResults(searchQuery);
    }

    componentDidUpdate(prevProps, prevState) {
        const params = new URLSearchParams(window.location.search);
        const currentQuery = params.get('query') || '';
        const prevParams = new URLSearchParams(prevProps.location?.search || '');
        const prevQuery = prevParams.get('query') || '';

        if (currentQuery && currentQuery !== prevQuery) {
            this.handleFetchSearchResults(currentQuery);
        }
    }

    render() {
        const { searchResults, isLoading } = this.state;

        if (isLoading) {
            return <FontAwesomeIcon icon="spinner" spin />;
        }
        
        if (!searchResults || searchResults.lenght=== 0) {
            return <FontAwesomeIcon icon="spinner" spin />;
        }    

        return (
            <div className="searchResults">
                <TopBanner />
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