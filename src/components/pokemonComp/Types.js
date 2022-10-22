import React from 'react';

import Type from './Type';


const Types = (props) => {
  return (
    <div className='type-container'>
      <h4>Types</h4>
      <div className='type-list'>
        {props.types.map((type) => {
          return (
            <Type type={type.type.name}></Type>
          )
        })}
      </div>
    </div>
  )
}

export default Types