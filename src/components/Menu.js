import React from 'react';
import MenuItem from './MenuItem';

const Menu = ( props ) => {

  const menuItemsDivs = props.menuItems.map(el => <MenuItem menuItemName={el} />);

  return (
    <ul className='menu'>
      {menuItemsDivs}
    </ul>
  );
};

export default Menu;
