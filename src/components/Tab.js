import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ name }) => {
  return (
    <Link to={`/${name}`} className='tab' >
      <div>{name}</div>
    </Link>
  )
}

export default Tab