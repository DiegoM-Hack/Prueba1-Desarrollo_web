import { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then(res => setPokemons(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {pokemons.map((p, index) => (
        <li key={index}>{p.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
