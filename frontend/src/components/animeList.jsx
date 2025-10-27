import axios from "axios";
import { useEffect, useState } from "react";
import "./../animeList.css"; // Importamos los estilos

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [category, setCategory] = useState("Action");

  const fetchAnime = async () => {
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${category}&limit=6`);
      setAnimes(res.data.data);
    } catch (error) {
      console.error("Error cargando animes", error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [category]);

  const cambiarCategoria = () => {
    const categorias = ["Action", "Romance", "Comedy", "Adventure", "Horror"];
    const random = categorias[Math.floor(Math.random() * categorias.length)];
    setCategory(random);
  };

  return (
    <div className="anime-container">
      <div className="anime-header">
        <h2>🎌 Animes ({category})</h2>
        <button onClick={cambiarCategoria}>Cambiar categoría</button>
      </div>

      <div className="anime-grid">
        {animes.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="anime-image"
            />
            <h3>{anime.title}</h3>
            <p>{anime.type} • {anime.episodes || "?"} eps</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
