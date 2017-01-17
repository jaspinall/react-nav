import React, { Component } from 'react';
import Menu from './Menu';
import Title from './Title';

class Navbar extends Component {

  constructor() {
    super();
    this.selected = '';
    // this.toggled = false;
    // this.menuToggle = this.menuToggle.bind(this);
  }
  //
  // clickLink() {
  //
  // }
  //
  // menuToggle() {
  //
  // }

  render() {

    const menuItemsArr = ['About', 'Blog', 'Contact'];

    return (
      <div className='nav'>
        <Title />
        <Menu menuItems={menuItemsArr}/>
      </div>
    );
  }
}

export default Navbar;
