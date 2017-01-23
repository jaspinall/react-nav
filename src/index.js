import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { Router, Route, hashHistory } from 'react-router';
require('./styles/styles.scss');

class App extends Component {

  render() {
    const navOptions = {
      companyName: 'my company',
      routeInfo: [
        { displayName: 'ABOUT',
          link: '/about',
        },
        { displayName: 'HOME',
          link: '/home',
        },
        { displayName: 'CONTACT',
          link: 'https://www.google.com/',
        },
      ],
    };

    return (
      <div>
        <Navbar navOptions={navOptions} />
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/about' component={About} />
      <Route path='/home' component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
