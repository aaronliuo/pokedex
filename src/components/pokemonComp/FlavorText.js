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
    <p>{filterText(props.text)}</p>
  )
}

export default FlavorText