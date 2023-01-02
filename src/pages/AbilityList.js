import React from 'react';
import AboutAbility from '../components/abilityListComp/AboutAbility';
import Header from '../components/abilityListComp/Header';
import Sidebar from '../components/Sidebar';
import Entry from '../components/abilityListComp/Entry.js'
import './abilityList.css';

const AbilityList = ({ selectedAbility, setSelectedAbility, abilities }) => {

  return (
    <div className='ability-list-container'>
      <AboutAbility />
      <Sidebar selectedPoke={selectedAbility} setSelectedPoke={setSelectedAbility} pokemons={abilities} />
      <Entry id={selectedAbility} updateSelectedAbility={setSelectedAbility} />
    </div>
  )
}

export default AbilityList