import React from "react";
import * as C from './App.styles.js';
import { NavBar } from './components/NavBar';
import { SearchPokemonBar } from './components/SearchPokemonBar';

const App = () => {
  return (
    <C.MainContainer>
      <NavBar />
      <SearchPokemonBar />
    </C.MainContainer>
  )
}

export default App;