import React, { Component } from 'react';
import Menu from './Menu';

const hamburger = require('../images/hamburger.svg');
const hamburgerClose = require('../images/hamburgerClose.svg');

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
      icon: hamburger,
    }
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    const toggled = !this.state.toggled;
    const icon = toggled === true ? hamburgerClose : hamburger;
    this.setState({
      toggled,
      icon,
    });
  }

  render() {
    return (
      <div className='nav'>
        <Menu display={this.state.toggled} routeInfo={this.props.navOptions.routeInfo} toggleList={this.menuToggle}/>
        <img className="hamburger" onClick={this.menuToggle} src={this.state.icon}></img>
      </div>
    );
  }
}

export default Navbar;
