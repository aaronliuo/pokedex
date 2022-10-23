import React from 'react';
import BaseStat from './BaseStat';

const BaseStats = (props) => {
  return (
    <div>
      <h3>Base Stats</h3>
      {props.stats.map((stat) => {
        return (
          <BaseStat key={stat.stat.name} stat={stat} ></BaseStat>
        )
      })}
    </div>
  )
}

export default BaseStats