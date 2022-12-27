import React from 'react';
import Types from '../pokemonComp/Types';

const Info = ({ id, pokemon }) => {

  const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='info'>
      <div className='large-poke-image-2'>
        <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      </div>
      {
        pokemon.name !== undefined &&
        <h2>#{id}. {capString(pokemon.name)} </h2>
      }
      {pokemon.types !== undefined && <Types types={pokemon.types} ></Types>}
    </div>
  )
}

export default Info