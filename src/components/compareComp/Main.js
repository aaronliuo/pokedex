import React from 'react'
import DuelPokemon from './DuelPokemon'

const Main = ({ selectedPoke1, selectedPoke2 }) => {
  return (
    <div className='main' >
      {selectedPoke1 === -1 || selectedPoke2 === -1 
      ? <div className='no-pokemon'>
          <h1>Please Select Two Pokemons to Compare</h1>
          <h3>One from each side</h3>
        </div>
      : <DuelPokemon id1={selectedPoke1} id2={selectedPoke2} />
      }
    </div>
  )
}

export default Main