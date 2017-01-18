import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router';

const Menu = ( props ) => {

  console.log(props);

  const menuItemsDivs = props.routeInfo.map(el => {
    if (el.type === 'react-router') {
      return (<Link to={el.link} className="menuItem">
        <MenuItem itemName={el.displayName}/>
      </Link>)
    } else {
      return (<a href={el.link} target='_blank' className="menuItem">
        <MenuItem itemName={el.displayName}/>
      </a>)
    }
  });

  return (
    <ul className='menu'>
      {menuItemsDivs}
    </ul>
  );
};

export default Menu;
