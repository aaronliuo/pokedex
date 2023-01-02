import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from 'axios';
import { BrowserRouter as Router, Routes, Route, useHref } from 'react-router-dom';
import Tab from "./components/Tab";
import PokemonList from "./pages/PokemonList";
import Compare from "./pages/Compare";
import Load from "./pages/Load"; 
import AbilityList from "./pages/AbilityList";

function App() {

  const [selectedPoke, setSelectedPoke] = useState(1);
  const [pokemons, setPokemons] = useState([]); 
  const [selectedAbility, setSelectedAbility] = useState(1);
  const [abilities, setAbilities] = useState([]);

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
    axios.post('http://localhost:3001/getPokemonAbilities', {limit: '327'})
      .then((response) => {
        assignIds(response.data.results);
        setAbilities(response.data.results);
      }).catch(error => {
        console.log(error.message);
      })
  }, []);

  // useEffect(() => {

  // }, )

  return (
    <Router>
      <div className="pokedex-container">
        <div className="felicia">
          <div className="nav-bar">
            <Tab name="Pokemon" ></Tab>
            <Tab name="Compare" ></Tab>
            <Tab name="Abilities" ></Tab>
          </div>
          <Routes>
            <Route exact path="/" element={<Load />} >
            </Route>
            <Route path="/Pokemon" element={<PokemonList selectedPoke={selectedPoke} setSelectedPoke={setSelectedPoke} pokemons={pokemons} />} />
            <Route path="/Compare" element={<Compare pokemons={pokemons} />} />
            <Route path="/Abilities" element={<AbilityList selectedAbility={selectedAbility} setSelectedAbility={setSelectedAbility} abilities={abilities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
