import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Entry = ({ id, updateSelectedAbility }) => {

  const [ability, setAbility] = useState({});

  useEffect(() => {
    axios.post('http://localhost:3001/getPokemonAbility', {ability: id})
      .then((response) => {
        setAbility(response.data);
        console.log(response.data);
      }).catch(error => {
        console.log(error.message);
      })
  }, [id]);

  return (
    <div className='entry-container'>
      {ability.name !== undefined && <div className='ability-name-container'>{ability.name}</div>}
      {ability.effect_entries !== undefined && <div>{ability.effect_entries[1].effect}</div>}
      {ability.pokemon !== undefined &&
        <div className='pokemon-grid' >
          <div className='name-col grid-header' >Name</div>
          <div className='hidden-col grid-header' >Hidden?</div>
          <div className='slot-col grid-header' >Slot</div>
          {ability.pokemon.map((pokemon) => {
            return (
              <>
                <div className='name-col' >{pokemon.pokemon.name}</div>
                <div className='hidden-col' >{pokemon.is_hidden ? "True" : "False"}</div>
                <div className='slot-col' >{pokemon.slot}</div>
              </>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Entry