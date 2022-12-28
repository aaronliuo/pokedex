import React from 'react';
import { useRef, useEffect } from 'react';

const Stat = ({ name, value1, value2 }) => {

  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const stat1 = useRef(null);
  const stat2 = useRef(null);

  useEffect(() => {
    const width1 = value1/(value1 + value2) * 100;
    const width2 = value2/(value1 + value2) * 100;
    bar1.current.style.width = width1 + "%";
    bar2.current.style.width = width2 + "%";

    if(value1 > value2) {
      stat1.current.style.backgroundColor = "rgb(125, 223, 161)";
      stat2.current.style.backgroundColor = "white";
    } else if (value1 < value2) {
      stat1.current.style.backgroundColor = "white";
      stat2.current.style.backgroundColor = "rgb(125, 223, 161)";
    } else {
      stat1.current.style.backgroundColor = "rgb(165, 165, 255)";
      stat2.current.style.backgroundColor = "rgb(165, 165, 255)";
    }

  }, [value1, value2]);

  return (
    <div className='stat-position'>
      <div className='stat-compare-name' >
        {name}
      </div>
      <div className='stat-compare-container' >
        <div ref={stat1} className='stat-compare-text'>
          {value1}
        </div>
        <div className='bar-container' >
          <div ref={bar1} className='bar bar-1 '></div>
          <div ref={bar2} className='bar bar-2 ' ></div>
        </div>
        <div  ref={stat2} className='stat-compare-text'>
          {value2}
        </div>
      </div>
    </div>
  )
}

export default Stat