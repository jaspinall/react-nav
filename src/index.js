import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { Router, Route, hashHistory } from 'react-router'
require('./styles.scss');

class App extends Component {

  render() {
    const navOptions = {
      companyName: 'my company',
      routeInfo: [
        { displayName: 'About',
          link: '/about',
          type: 'react-router',
        },
        { displayName: 'Home',
          link: '/home',
          type: 'react-router',
        },
        { displayName: 'Contact',
          link: 'http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/',
          type: 'external',
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
