import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Searchbar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="searchbarContainer">
            <input className="searchbarInput"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder ="Search for an anime..."
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="btn" onClick={handleSearch}>
                Search
                <FontAwesomeIcon className="searchIcon" icon="magnifying-glass"  />
            </button>
        </div>
    );
}
    
