import React, { Component } from 'react';
import Menu from './Menu';
import Title from './Title';

const hamburger = require('../images/hamburger.svg');
const hamburgerClose = require('../images/hamburgerClose.svg');

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
      icon: hamburger
    }
    this.menuToggle = this.menuToggle.bind(this)
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
    const displayTitle = this.props.navOptions.companyName !== undefined ? 'block' : 'none';

    return (
      <div className='nav'>
        <Title styles={{display: {displayTitle}}}/>
        <Menu display={this.state.toggled} routeInfo={this.props.navOptions.routeInfo}  />
        <img className="hamburger" onClick={this.menuToggle} src={this.state.icon}></img>
      </div>
    );
  }
}

export default Navbar;
