import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const SidebarItem = (props) => {

  return (
    <div className='sidebar-item' onClick={() => {props.updateSelectedPoke(props.id)}}>
      <div className='poke-image-container'>
        <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
      </div>
      <div>{props.id}. </div>
      <div>{props.name}</div>
    </div>
  )
}

export default SidebarItem