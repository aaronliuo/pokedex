import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ name }) => {
  return (
    <Link to={`/${name}`} className='tab' >
      {name}
    </Link>
  )
}

export default Tab