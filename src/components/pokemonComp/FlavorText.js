import React from 'react'

const FlavorText = (props) => {

  const filterText = (data) => {
    let idx = 0;
    while(data[idx].language.name !== "en") {
      idx++;
    }
    const text = data[idx].flavor_text;
    return text.replace('\f', '\n')
                .replace('\n', ' ')
                .replace('POKéMON', 'Pokemon');
  }

  return (
    <div>
      <h3>Description</h3>
      <p>{filterText(props.text)}</p>
    </div>
  )
}

export default FlavorText