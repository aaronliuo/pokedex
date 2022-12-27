import React from 'react';
import { useState, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import SearchBar from './sidebarComp/SearchBar';

const Sidebar = ({ setSelectedPoke, pokemons }) => {

  let count = 0;
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
          count += 1;
          return (
          <SidebarItem 
            key={pokemon.id} 
            id={pokemon.id} 
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