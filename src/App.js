import React, { useEffect, useState } from "react";

import { api } from "./api.js";

import * as C from "./App.styles.js";

import { NavBar } from "./components/NavBar";
import { Pagination } from "./components/Pagination.js";
import { Pokedex } from "./components/Pokedex.js";
import { SearchPokemonBar } from "./components/SearchPokemonBar";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 24;

  const fetchPokemonsData = async () => {
    try {
      setLoading(true);
      const data = await api.fetchPokemons(itensPerPage * page, itensPerPage);
      const promise = data.results.map(
        async (pokemon) => await api.getPokemonData(pokemon.url)
      );

      const results = await Promise.all(promise);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonsData();
  }, [page]);

  return (
    <div style={{backgroundColor: '#3c5aa6'}}>
      <NavBar />
      <SearchPokemonBar />
        <Pokedex pokemonData={pokemons} loading={loading} setPage={setPage} page={page} totalPages={totalPages} />
    </div>
  );
};

export default App;
