import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Error from './components/Error';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component = { Home } />
            <Route path={process.env.PUBLIC_URL + '/about'} component = { About } />
            <Route path={process.env.PUBLIC_URL + '/projects'} component = { Projects } />
            <Route path={process.env.PUBLIC_URL + '/resources'} component = { Resources } />
            <Route component = { Error } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
