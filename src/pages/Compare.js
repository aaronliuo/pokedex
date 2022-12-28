import React from 'react';
import './compare.css';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/compareComp/Main';

const Compare = ({ pokemons }) => {

  const [selectedPoke1, setSelectedPoke1] = useState(-1);
  const [selectedPoke2, setSelectedPoke2] = useState(-1);

  return (
    <div className='compare-container'>
      <Sidebar selectedPoke={selectedPoke1} setSelectedPoke={setSelectedPoke1} pokemons={pokemons} />
      <Main  selectedPoke1={selectedPoke1} selectedPoke2={selectedPoke2} />
      <Sidebar selectedPoke={selectedPoke2} setSelectedPoke={setSelectedPoke2} pokemons={pokemons} />
    </div>
  )
}

export default Compare