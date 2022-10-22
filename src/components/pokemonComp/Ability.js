import React from 'react'

const Ability = (props) => {
  return (
    <div>
      <div>{props.ability.ability.name}</div>
      {props.ability.is_hidden === true && <h6>Is hidden</h6>}
    </div>
  )
}

export default Ability