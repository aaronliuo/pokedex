import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {

  const [pokemon, setPokemon] = useState([]); 

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${props.id}`).then(response => {
      setPokemon(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }, [props.id]);

  return (
    <div className='pokemon-entry'>
      <div className='large-poke-image'>
        <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
      </div>
      <div className='poke-info'>
        <h1 className='poke-name'>{pokemon.name} </h1>
        <div className='poke-stats'></div>
      </div>
      <div className='poke-description'></div>
    </div>
  )
}

export default Pokemon