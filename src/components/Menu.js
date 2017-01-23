import React from 'react';
import { Link } from 'react-router';
import MenuItem from './MenuItem';

const Menu = ({ display, routeInfo, toggleList }) => {

  let linkItemCounter = 0;
  let menuItemCounter = 0;

  const menuItemsDivs = routeInfo.map((el) => {
    menuItemCounter++;
    linkItemCounter++;
    if (el.type === 'react-router') {
      return (<Link to={el.link} className="menuItem" onClick={toggleList} key={linkItemCounter}>
        <MenuItem itemName={el.displayName}  key={menuItemCounter}/>
      </Link>);
    }
    return (<a href={el.link} target="_blank" rel="noopener noreferrer" className="menuItem" key={linkItemCounter}>
      <MenuItem itemName={el.displayName} onClick={toggleList} key={menuItemCounter}/>
    </a>);
  });

  const transform = display ? 'translateY(0)' : 'translateY(-250px)';

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

export default Menu;
