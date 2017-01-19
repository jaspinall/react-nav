import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router';

const MenuMobile = ({ display, routeInfo }) => {

  const menuItemsDivs = routeInfo.map(el => {
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

  const transform = display ? 'translateY(0)' : 'translateY(-200px)';

  const divStyles = {
    transform,
  };

  return (
    <div>
      <ul className="menu" style={divStyles}>
          {menuItemsDivs}
      </ul>
      <ul className="desktopMenu">
        {menuItemsDivs}
      </ul>
    </div>
  );
};

export default MenuMobile;
