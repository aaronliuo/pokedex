import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './load.css';

const Load = () => {

  const navigate = useNavigate();
  const ball = useRef(null);
  const background = useRef(null);
  const upper = useRef(null);
  const lower = useRef(null);

  const goToPokemon = () => navigate('/Pokemon');

  const startAnimation = (e) => {
    ball.current.style.transition = "background-color 0.5s";
    ball.current.style.backgroundColor = "rgb(255, 255, 82)";
    background.current.style.backgroundColor = "rgb(238, 121, 121)";
    upper.current.style.transform = "translateY(-150%)";
    lower.current.style.transform = "translateY(100%)";
    background.current.children[2].remove();
    setTimeout(goToPokemon, 1000);
  }

  return (
    <div ref={background} className='load-container'>
      <div ref={upper} className='upper'>
        <div ref={ball} className='ball-container' onClick={startAnimation}>
          <div className='ball-circle' ></div>
        </div>
      </div>
      <div ref={lower} className='lower'></div>
      <div className='load-text'>
        Click the center to open the Pokedex!
      </div>
    </div>
  )
}

export default Load