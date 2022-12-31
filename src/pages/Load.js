import React from 'react';
import { useRef } from 'react';
import './load.css';

const Load = () => {

  return (
    <div className='load-container'>
      <div className='upper'>

      </div>
      <div className='lower'>

      </div>
      <div className='ball-container' >
        <div className='ball-circle' ></div>
      </div>
      <div className='load-text'>
        Click in the center to open the Pokedex!
      </div>
    </div>
  )
}

export default Load