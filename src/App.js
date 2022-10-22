import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Pokemon from "./components/Pokemon";

function App() {

  const [selectedPoke, setSelectedPoke] = useState(1);

  const updateSelectedPoke = (pokemonID) => {
    setSelectedPoke(pokemonID);
  }

  return (
    <div className="pokedex-container">
      <div className="pokedex">
        <Sidebar updateSelectedPoke={updateSelectedPoke} ></Sidebar>
        <Pokemon id={selectedPoke} ></Pokemon>
      </div>
    </div>
  );
}

export default App;
