import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AnimeList({ title, animes, loading}) {
    const navigate = useNavigate();

    return(
        <div className="animeSection">
            <h1>{title}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="animeContainer">
                    {animes.map((anime)=> (
                        <div className="animeContainerColumns" key={anime.mal_id}>
                            {anime.title}<br />
                            <img
                                className="animeImg"
                                src={anime.images.jpg.image_url}
                                alt={anime.title}
                                onClick={ ()=> navigate(`/anime-info?id=${anime.mal_id}`)}
                            /><br />
                            <div className="scoreText">{anime.score ?? "No score availiable"}</div><br />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}