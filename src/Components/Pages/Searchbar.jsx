import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
        };
    }

    handleInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleSearch = () => {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.searchQuery);
        }
    };

    render() {
        return (
            <div className="searchbarContainer">
                <input className="searchbarInput"
                    type="text"
                    value={this.state.searchQuery}
                    onChange={this.handleInputChange}
                    placeholder ="Search for an anime..."
                    onKeyDown={(e) => e.key === "Enter" && this.handleSearch()}
                />
                <button className="btn">
                    <a onClick={this.handleSearch}>
                        Search
                        <FontAwesomeIcon className="searchIcon" icon="magnifying-glass"  />
                    </a>
                </button>
            </div>
        );
    }
}
    
