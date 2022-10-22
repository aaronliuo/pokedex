import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import Abilities from './pokemonComp/Abilities';
import Types from './pokemonComp/Types';

const Pokemon = (props) => {

  const [pokemonSpecies, setPokemonSpecies] = useState([]); 
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`).then(response => {
      setPokemonSpecies(response.data);
    }).catch(error => {
      console.log(error.message);
    })
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
        <h1 className='poke-name'>#{props.id}. {pokemon.name} </h1>
        <div className='poke-stats'>
          {pokemon.types !== undefined && <Types types={pokemon.types} ></Types>}
          {pokemon.abilities !== undefined && <Abilities abilities={pokemon.abilities} ></Abilities>}
        </div>
      </div>
      <div className='poke-description'></div>
    </div>
  )
}

export default Pokemon