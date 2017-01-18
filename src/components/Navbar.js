import React, { Component } from 'react';
import Menu from './Menu';
import Title from './Title';

const pathToHamburger = require('../images/hamburger.svg');

class Navbar extends Component {

  constructor() {
    super();
    // this.toggled = false;
    // this.menuToggle = this.menuToggle.bind(this);
  }

  render() {

    let displayTitle = '';
    this.props.navOptions.companyName !== undefined ? displayTitle = "block" : "none";

    return (
      <div className='nav'>
        <img className="hamburger" src={pathToHamburger}></img>
        <Title styles={{display: {displayTitle}}}/>
        <Menu routeInfo={this.props.navOptions.routeInfo} />
      </div>
    );
  }
}

export default Navbar;
