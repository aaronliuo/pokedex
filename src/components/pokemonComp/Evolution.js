import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Evolution = (props) => {

  const [pokemon, setPokemon] = useState([]);

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    if(props.evolution !== null) {
      axios(`https://pokeapi.co/api/v2/pokemon/${props.evolution.name}`).then(response => {
        setPokemon(response.data);
      }).catch(error => {
        console.log(error.message);
      })
    } else {
      setPokemon([]);
    }
  }, [props.evolution]);

  if(props.evolution === null) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div>
        <h3>Evolves From</h3>
          {pokemon.id !== undefined &&
            <div className='evolution-container' onClick={() => {props.updateSelectedPoke(pokemon.id)}} >
              <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
              <p>#{pokemon.id}. {capString(props.evolution.name)}</p>
            </div>
          }
      </div>
    )
  }
}

export default Evolution