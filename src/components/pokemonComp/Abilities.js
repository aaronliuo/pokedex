import React from 'react';

import Ability from './Ability';

const Abilities = (props) => {
  return (
    <div className='abilities-container'>
      <h3>Abilities</h3>
      <div className='ability-container'>
        {props.abilities.map((ability) => {
          return (
            <Ability key={ability.ability.name} ability={ability}></Ability>
          )
        })}
      </div>
    </div>
  )
}

export default Abilities