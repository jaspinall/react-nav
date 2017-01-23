import React from 'react';

const MenuItem = ({ itemName }) => <li className="navListItems">{itemName}</li>;

MenuItem.propTypes = {
  itemName: React.PropTypes.string.isRequired,
};

export default MenuItem;
