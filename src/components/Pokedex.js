import React from "react";

import * as C from "./../App.styles.js";

import { Pagination } from "./Pagination.js";
import { PokeBallLoader } from "./PokeballLoader.js";
import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokemonData, loading, setPage, page, totalPages }) => {
  const handleLeftClick = () => {
    if (page > 0) setPage(page - 1); 
}

const handleRightClick = () => {
    if (page != totalPages) setPage(page + 1);
}

  return (
    <C.MainContainer>
      <C.PokedexTitle>Pokedex</C.PokedexTitle>
      <Pagination setPage={setPage} page={page + 1} totalPages={totalPages} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}/> 
      {loading && <PokeBallLoader />}
      {!loading && pokemonData && (
        <C.PokedexGrid>
          {pokemonData.map((pokemon, index) => (
              <Pokemon pokemon={pokemon} />
          ))}
        </C.PokedexGrid>
      )}
    </C.MainContainer>
  );
};
