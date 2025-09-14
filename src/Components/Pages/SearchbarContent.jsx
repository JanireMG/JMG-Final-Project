import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function SearchbarContent() {
    const location = useLocation();
    const useParams = new URLSearchParams(location.search);
    const searchQuery = useParams.get('query') || '';
    
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchQuery) return;
        
        setLoading(true);
        
        fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.data || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [searchQuery]);

    return (
        <div className="searchResults">
            <Searchbar />
            {loading && <p>Loading...</p>}
            {!loading && searchResults.length === 0 && <p>No results found.</p>}
            <div className="animeContainerResults">
                {searchResults.map((anime) => (
                    <div key={anime.mal_id}>
                        <h3>{anime.title}</h3>
                        <img className='animeImg' 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                        />
                        <p>{anime.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}