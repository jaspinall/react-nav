import React, { Component } from 'react';
import Menu from './Menu';
import Hamburger from '../images/hamburger.svg';
import HamburgerClose from '../images/hamburgerClose.svg';

require('../styles/navStyles.scss');

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
    };
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    const toggled = !this.state.toggled;
    this.setState({
      toggled,
    });
  }

  render() {
    const icon = this.state.toggled ?
    <HamburgerClose className="menuClose" onClick={this.menuToggle}/> :
    <Hamburger className="hamburger" onClick={this.menuToggle}/>;

    return (
      <div className="nav">
        {icon}
        <Menu
          display={this.state.toggled}
          routeInfo={this.props.routeInfo}
          toggleList={this.menuToggle}
        />
      </div>
    );
  }
}

Navbar.propTypes = {
  routeInfo: React.PropTypes.arrayOf(React.PropTypes.shape({
    displayName: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Navbar;
