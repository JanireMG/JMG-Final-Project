import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function SearchbarContent({ onSearch }) {
    const query = useQuery();
    const initialQuery = query.get("q") || "";
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!initialQuery) return;
        
        setLoading(true);
        
        fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(initialQuery)}`)
            .then((response) => response.json())
            .then((data) => {
                const results = data.data || [];
                setSearchResults(results);
                setLoading(false);

                if (onSearch) onSearch(results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [initialQuery, onSearch]);

        return (
            <div className="searchResults">
                {loading && <p>Loading...</p>}
                {!loading && searchResults.length === 0 && <p>No results found.</p>}
                <div className="animecontainerColumnsd">
                    {searchResults.map((anime) => (
                        <div key={anime.mal_id} className="animeCard">
                            <img src={anime.images.jpg.image_url} alt={anime.title} />
                            <h3>{anime.title}</h3>
                            <p>Score: {anime.score}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
}