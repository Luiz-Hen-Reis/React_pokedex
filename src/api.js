import React from "react";
import axios from "axios";

const BASE = 'https://pokeapi.co/api/v2/pokemon/';

export const api = {
    getPokemons: async () => {
        const response = await axios.get(`${BASE}`);
        return await response.data;
    },
    searchPokemons: async (pokemon) => {
        const response = await axios.get(`${BASE}${pokemon}`);
        return await response.data;
    },
}