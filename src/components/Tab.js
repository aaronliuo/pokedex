import React from 'react';
import { Link, useHref } from 'react-router-dom';

const Tab = ({ name }) => {

  const href = useHref();

  if(href === '/') {
    return <></>
  } else {
    return (
      <Link to={`/${name}`} className='tab' >
        <div>{name}</div>
      </Link>
    )
  }
}

export default Tab