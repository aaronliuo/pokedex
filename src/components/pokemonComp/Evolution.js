import React from 'react'

const Evolution = (props) => {
  if(props.evolution === null) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div>
        <h3>Evolves From</h3>
        <p>{props.evolution.name}</p>
      </div>
    )
  }
}

export default Evolution