import React, { useState } from "react";
import { api } from "../api.js";
import * as C from "./../App.styles.js";
import { Pokemon } from "./Pokemon.js";

export const SearchPokemonBar = () => {
  const [search, setSearch] = useState();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButton = async () => {
    try {
      setLoading(true);
      setPokemon(await api.searchPokemons(search));
      setSearch('');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <C.SearchContainer>
        <C.SearchPokemonBarContainer>
          <input value={search} placeholder="Busque um pokémon..." onChange={handleSearchInput} />
        </C.SearchPokemonBarContainer>
        <C.SearchButton>
          <button onClick={handleSearchButton}>Buscar</button>
        </C.SearchButton>
      </C.SearchContainer>
      {loading &&
        <div>Carregando...</div>
      }
      {!loading && pokemon && 
        <C.ShowPokemonSearched>
          <Pokemon pokemon={pokemon} />
        </C.ShowPokemonSearched>
      }
    </div>
  );
};
