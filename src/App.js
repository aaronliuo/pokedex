import React from "react";
import Sidebar from "./components/Sidebar";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="pokedex-container">
      <div className="pokedex">
        <Sidebar></Sidebar>
        <Pokemon></Pokemon>
      </div>
    </div>
  );
}

export default App;
