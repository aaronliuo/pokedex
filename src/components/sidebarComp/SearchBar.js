import React from 'react'

const SearchBar = (props) => {

  const handleFilter = (event) => {
    const searchKey = event.target.value;
    const filteredData = props.data.filter((pokemon) => {
      return pokemon.name.includes(searchKey);
    })
    console.log(filteredData);
    props.changePokemons(filteredData);
  }

  console.log(props.data);

  return (
    <div className='searchbar'>
      <div className='search-inputs'>
        <input type="text" onChange={handleFilter}/>
        <div className='search-icon'></div>
      </div>
      <div className='data-result'></div>
    </div>
  )
}

export default SearchBar