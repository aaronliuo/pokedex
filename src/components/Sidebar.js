import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarItem from './SidebarItem';

const Sidebar = () => {

  let count = 0;
  const [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    count = 0;
    axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => {
      setPokemons(response.data.results);
      console.log(pokemons);
    }).catch(error => {
      console.log(error.message);
    })
  }, []);

  return (
    <div className='sidebar'>
      {pokemons.map((pokemon) => {
        count += 1;
        return (
        <SidebarItem key={count} id={count} name={pokemon.name} ></SidebarItem>
        );
      })};
    </div>
  )
}

export default Sidebar