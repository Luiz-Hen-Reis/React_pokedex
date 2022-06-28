import React, { useEffect, useState } from "react";

import { api } from "./api.js";

import * as C from "./App.styles.js";

import { NavBar } from "./components/NavBar";
import { Pokedex } from "./components/Pokedex.js";
import { SearchPokemonBar } from "./components/SearchPokemonBar";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState();

  const fetchPokemonsData = async () => {
    try {
      setLoading(true);
      const data = await api.fetchPokemons();
      const promise = data.results.map(
        async (pokemon) => await api.getPokemonData(pokemon.url)
      );

      const results = await Promise.all(promise);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonsData();
    console.log(pokemons);
  }, []);

  return (
    <C.MainContainer>
      <NavBar />
      <SearchPokemonBar />
      <Pokedex pokemonData={pokemons} loading={loading}/>
    </C.MainContainer>
  );
};

export default App;
