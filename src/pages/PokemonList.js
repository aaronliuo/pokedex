import React from 'react';
import Sidebar from "../components/Sidebar";
import Pokemon from "../components/Pokemon";

const PokemonList = ({ selectedPoke, setSelectedPoke, pokemons }) => {
  return (
    <div className="pokedex">
      <Sidebar selectedPoke={selectedPoke} setSelectedPoke={setSelectedPoke} pokemons={pokemons} ></Sidebar>
      <Pokemon id={selectedPoke} updateSelectedPoke={setSelectedPoke}></Pokemon>
    </div>
  )
}

export default PokemonList