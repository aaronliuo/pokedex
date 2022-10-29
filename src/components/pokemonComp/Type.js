import React from 'react'

const Type = (props) => {

  const types = new Map([
    ['normal', 'rgba(168,168,120,255)'], 
    ['fire', 'rgba(240,128,48,255)'], 
    ['water', 'rgba(104,144,240,255)'], 
    ['grass', 'rgba(120,200,80,255)'],
    ['electric', 'rgba(248,208,48,255)'],
    ['ice', 'rgba(152,216,216,255)'],
    ['fighting', 'rgba(192,48,40,255)'],
    ['poison', 'rgba(160,64,160,255)'],
    ['ground', 'rgba(224,192,104,255)'],
    ['flying', 'rgba(168,144,240,255)'],
    ['psychic', 'rgba(248,88,136,255)'],
    ['bug', 'rgba(168,184,32,255)'],
    ['rock', 'rgba(184,160,56,255)'],
    ['ghost', 'rgba(112,88,152,255)'],
    ['dark', 'rgba(112,88,72,255)'],
    ['dragon', 'rgba(112,56,248,255)'],
    ['steel', 'rgba(184,184,208,255)'],
    ['fairy', 'rgba(240,182,188,255)']
  ]);

  const color = types.get(props.type);

  return (
    <div style={{background: `${color}`}}>
      <div>{props.type}</div>
    </div>
  )
}

export default Type