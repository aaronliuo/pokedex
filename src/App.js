import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tab from "./components/Tab";
import PokemonList from "./pages/PokemonList";
import Compare from "./pages/Compare";
import Load from "./pages/Load";

function App() {

  const [selectedPoke, setSelectedPoke] = useState(1);
  const [pokemons, setPokemons] = useState([]); 

  const assignIds = (data) => {
    data.forEach((item, i) => {
      item.id = i+1;
    })
  }

  useEffect(() => {
    axios.post('http://localhost:3001/getPokemonList', {limit: '151'})
      .then((response) => {
        assignIds(response.data.results);
        setPokemons(response.data.results);
      }).catch(error => {
        console.log(error.message);
      })
  }, []);

  return (
    <Router>
      <div className="pokedex-container">
        <div className="felicia">
          <div className="nav-bar">
            <Tab name="Pokemon" ></Tab>
            <Tab name="Compare" ></Tab>
          </div>
          <Routes>
            <Route exact path="/" element={<Load />} >
            </Route>
            <Route path="/Pokemon" element={<PokemonList selectedPoke={selectedPoke} setSelectedPoke={setSelectedPoke} pokemons={pokemons} />} />
              <Route path="/Compare" element={<Compare pokemons={pokemons} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
