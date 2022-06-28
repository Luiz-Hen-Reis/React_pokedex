import React from "react";

import * as C from "./../App.styles.js";

import { Pokemon } from "./Pokemon";

export const Pokedex = ({ pokemonData, loading }) => {
  return (
    <div>
      <C.pokedexTitle>Pokedex</C.pokedexTitle>
      {loading && <div>Carregando...</div>}
      {!loading && pokemonData && (
        <C.pokedexGrid>
          {pokemonData.map((pokemon, index) => (
            <C.pokedexGrid>
              <Pokemon pokemon={pokemon} />
            </C.pokedexGrid>
          ))}
        </C.pokedexGrid>
      )}
    </div>
  );
};
