import React from "react";
import * as C from "./../App.styles.js";
import { Type } from "./Type.js";

export const Pokemon = ({ pokemon }) => {
  return (
    <C.PokemonCard>
      <C.PokemonId>#{pokemon.id}</C.PokemonId>
      <C.CardImg>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </C.CardImg>
      <C.CardName>{pokemon.name}</C.CardName>
      <C.CardBottom>
          {pokemon.types.map((type, index) => (
            <Type type={type.type.name} />
          ))}
        </C.CardBottom>
    </C.PokemonCard>
  );
};

{/* <C.PokemonCard>
      <C.CardImg>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </C.CardImg>
      <C.CardMainInfo>
        <C.CardInfo>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </C.CardInfo>
        <C.CardBottom>
          {pokemon.types.map((type, index) => (
            <Type type={type.type.name} />
          ))}
        </C.CardBottom>
      </C.CardMainInfo>
    </C.PokemonCard> */}
