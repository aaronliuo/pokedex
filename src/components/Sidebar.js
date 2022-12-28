import React from 'react';
import { useState, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import SearchBar from './sidebarComp/SearchBar';

const Sidebar = ({ selectedPoke, setSelectedPoke, pokemons }) => {

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  
  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='sidebar'>
      <SearchBar changePokemons={setFilteredPokemons} data={pokemons} ></SearchBar>
      <div className='pokemon-list'>
        {filteredPokemons.map((pokemon) => {
          return (
          <SidebarItem 
            key={pokemon.id} 
            id={pokemon.id}
            selectedPoke={pokemon.id === selectedPoke}
            name={capString(pokemon.name)} 
            updateSelectedPoke={setSelectedPoke} >
          </SidebarItem>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar