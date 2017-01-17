import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
require('./styles.scss');

class App extends Component {
  render() {
    return <Navbar />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
