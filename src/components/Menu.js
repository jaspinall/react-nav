import React from 'react';
import { Link } from 'react-router';
import MenuItem from './MenuItem';

const Menu = ({ display, routeInfo, toggleList }) => {
  let linkItemCounter = 0;
  let menuItemCounter = 0;

  // check whether the links provided are external links or React Router links
  const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;

  const parsedRoutes = routeInfo.map((route) => {
    const newRoute = Object.assign({}, route);
    if (!(route.link.match(regex))) {
      newRoute.type = 'react-router';
    } else {
      newRoute.type = 'external';
    }
    return newRoute;
  });

  // generate an array of menu item divs
  const menuItemsDivs = parsedRoutes.map((el) => {
    menuItemCounter += 1;
    linkItemCounter += 1;
    if (el.type === 'react-router') {
      return (<Link to={el.link} className="menuItem" onClick={toggleList} key={linkItemCounter}>
        <MenuItem itemName={el.displayName} key={menuItemCounter} />
      </Link>);
    }
    return (
      <a
        href={el.link}
        target="_blank"
        rel="noopener noreferrer"
        className="menuItem"
        key={linkItemCounter}
      >
        <MenuItem itemName={el.displayName} onClick={toggleList} key={menuItemCounter} />
      </a>);
  });

  // show or hide the menu
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

Menu.propTypes = {
  routeInfo: React.PropTypes.arrayOf(React.PropTypes.shape({
    displayName: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
  })).isRequired,
  toggleList: React.PropTypes.func.isRequired,
  display: React.PropTypes.bool.isRequired,
};

export default Menu;
