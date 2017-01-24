import React, { Component } from 'react';
import Menu from './Menu';
import hamburger from '../images/hamburger.svg';
import hamburgerClose from '../images/hamburgerClose.svg';

require('../styles/navStyles.scss');

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
      icon: hamburger,
    };
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
      <div className="nav">
        <Menu
          display={this.state.toggled}
          routeInfo={this.props.routeInfo}
          toggleList={this.menuToggle}
        />
        <img
          onClick={this.menuToggle}
          className="hamburger"
          alt="open menu button"
          src={this.state.icon}
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
