# reactnav
A lightweight responsive navbar for React. reactnav can be used with or without [react-router](https://github.com/ReactTraining/react-router).

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save reactnav
    
### Getting Started

The Navbar component takes a required `routeInfo` array as props. `routeInfo` should be formatted as an array of objects,
each with a `displayName` and `link` property. The `displayName` and `link` values should be strings. 

```js
class App extends Component {

  render() {
    const routeInfo = [
      { displayName: 'ABOUT',
        link: '/about',
      },
      { displayName: 'HOME',
        link: '/home',
      },
      { displayName: 'CONTACT',
        link: 'https://www.mycontactform.com/',
      },
    ];
  }
}
```

Links can be [react-router](https://github.com/ReactTraining/react-router) links to other components or external links.

```js
class App extends Component {

  render() {
    const routeInfo = [
      { displayName: 'ABOUT',
        link: '/about',
      },
      { displayName: 'HOME',
        link: '/home',
      },
      { displayName: 'CONTACT',
        link: 'https://www.mycontactform.com/',
      },
    ];
  
    return (
      <div>
        <Navbar routeInfo={routeInfo} />
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
```
