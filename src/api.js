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
    fetchPokemons: async (offset = 0, limit = 50) => {
        const response = await axios.get(`${BASE}?offset=${offset}&limit=${limit}`);
        return await response.data;
    },
    getPokemonData: async (url) => {
        const response = await axios.get(url);
        return await response.data;
    },
}