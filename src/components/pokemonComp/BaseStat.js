import React from 'react';

const BaseStat = (props) => {
  return (
    <div className='stat-container'>
      <div className='stat-text' >{props.stat.stat.name}: {props.stat.base_stat}</div>
      {/* <div>EV: {props.stat.effort}</div> */}
    </div>
  )
}

export default BaseStat