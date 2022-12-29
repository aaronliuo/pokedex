import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import Abilities from './pokemonComp/Abilities';
import Types from './pokemonComp/Types';
import BaseStats from './pokemonComp/BaseStats';
import FlavorText from './pokemonComp/FlavorText';
import Evolution from './pokemonComp/Evolution';

const Pokemon = (props) => {

  const [pokemonSpecies, setPokemonSpecies] = useState({}); 
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.post('http://localhost:3001/getPokemon', {pokemon: props.id})
      .then((response) => {
        setPokemon(response.data);
      }).catch(error => {
        console.log(error.message);
      })
    axios.post('http://localhost:3001/getPokemonSpecies', {pokemon: props.id})
      .then((response) => {
        setPokemonSpecies(response.data);
      }).catch(error => {
        console.log(error.message);
      })
  }, [props.id]);

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='pokemon-entry'>
      <div className='large-poke-image'>
        <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
      </div>
      {
        pokemon.name !== undefined &&
        <div className='poke-info'>
        <h1 className='poke-name'>#{props.id}. {capString(pokemon.name)} </h1>
        <div className='poke-stats'>
          {pokemon.types !== undefined && <Types types={pokemon.types} ></Types>}
          {pokemon.abilities !== undefined && <Abilities abilities={pokemon.abilities} ></Abilities>}
          {pokemon.stats !== undefined && <BaseStats stats={pokemon.stats} ></BaseStats>}
          {pokemonSpecies.evolves_from_species !== undefined &&
            <Evolution evolution={pokemonSpecies.evolves_from_species} updateSelectedPoke={props.updateSelectedPoke} ></Evolution> 
          }
        </div>
      </div>
      }
      <div className='poke-description'>
        {pokemonSpecies.flavor_text_entries !== undefined && <FlavorText text={pokemonSpecies.flavor_text_entries} ></FlavorText>}
      </div>
    </div>
  )
}

export default Pokemon