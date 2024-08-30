import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pageOffset, setPageOffset] = useState(0); 
  const [nextUrl, setNextUrl] = useState(null); 
  const [prevUrl, setPrevUrl] = useState(null); 

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageOffset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next); 
        setPrevUrl(data.previous); 
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pageOffset]); 

  return (
    <main>
      <button
        type="button"
        className="button"
        onClick={() => setPageOffset(prevOffset => prevOffset - 20)}
        disabled={!prevUrl} 
      >
        Previous Page
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setPageOffset(prevOffset => prevOffset + 20)}
        disabled={!nextUrl} 
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">{name}</li>
        ))}
      </ul>
    </main>
  );
}
