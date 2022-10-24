import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {

  let count = 0;
  const [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    count = 0;
    axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => {
      setPokemons(response.data.results);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='sidebar'>
      {pokemons.map((pokemon) => {
        count += 1;
        return (
        <SidebarItem 
          key={count} 
          id={count} 
          name={capString(pokemon.name)} 
          updateSelectedPoke={props.updateSelectedPoke} >
        </SidebarItem>
        )
      })}
    </div>
  )
}

export default Sidebar