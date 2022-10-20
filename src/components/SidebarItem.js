import React from 'react';

const SidebarItem = (props) => {
  return (
    <div className='sidebar-item'>
      <div>{props.id}. </div>
      <div>{props.name}</div>
    </div>
  )
}

export default SidebarItem