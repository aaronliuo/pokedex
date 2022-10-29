import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarItem from './SidebarItem';
import SearchBar from './sidebarComp/SearchBar';

const Sidebar = (props) => {

  let count = 0;
  const [pokemons, setPokemons] = useState([]); 
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const assignIds = (data) => {
    data.forEach((item, i) => {
      item.id = i+1;
    })
  }

  useEffect(() => {
    count = 0;
    axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => {
      assignIds(response.data.results);
      setPokemons(response.data.results);
      setFilteredPokemons(response.data.results);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const changePokemons = (filteredPokemons) => {
    setFilteredPokemons(filteredPokemons);
  }

  return (
    <div className='sidebar'>
      <SearchBar changePokemons={changePokemons} data={pokemons} ></SearchBar>
      <div className='pokemon-list'>
        {filteredPokemons.map((pokemon) => {
          count += 1;
          return (
          <SidebarItem 
            key={pokemon.id} 
            id={pokemon.id} 
            name={capString(pokemon.name)} 
            updateSelectedPoke={props.updateSelectedPoke} >
          </SidebarItem>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar