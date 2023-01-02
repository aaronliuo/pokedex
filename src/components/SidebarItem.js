import React from 'react';
import { useHref } from 'react-router-dom';

const SidebarItem = (props) => {

  const check = () => {
    if(props.selectedPoke === true) {
      return " selected-pokemon";
    }
    return "";
  }

  const href = useHref();

  return (
    <div className={'background-padding' + check()} >
      <div className={'sidebar-item'} onClick={() => {props.updateSelectedPoke(props.id)}}>
        {href !== '/Abilities' && 
          <div className='poke-image-container'>
            <img className='poke-image' alt='Pic of pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
          </div>
        }
        <div>{props.id}. </div>
        <div>{props.name}</div>
      </div>
    </div>
  )
}

export default SidebarItem