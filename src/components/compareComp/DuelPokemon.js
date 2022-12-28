import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info';
import Stat from './Stat';

const DuelPokemon = ({ id1, id2 }) => {

  const [pokemon1, setPokemon1] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${id1}`).then(response => {
      setPokemon1(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }, [id1]);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${id2}`).then(response => {
      setPokemon2(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }, [id2]);

  return (
    <div>
      <div className='info-container' >
        <Info id={id1} pokemon={pokemon1} />
        <Info id={id2} pokemon={pokemon2} />
      </div>
      <div>
        {
          pokemon1.stats !== undefined &&
          pokemon2.stats !== undefined &&
          pokemon1.stats.map((stat, index) => {
            return (
              <Stat 
                key={stat.stat.name} 
                name={stat.stat.name} 
                value1={stat.base_stat} 
                value2={pokemon2.stats[index].base_stat} 
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default DuelPokemon