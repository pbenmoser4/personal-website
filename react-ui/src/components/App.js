import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAppSections } from '../actions';

import Header from './Header';
import Home from './Home';
import Personal from './Personal';
import Resume from './Resume/Resume';
import Contact from './Contact';
import Projects from './Projects';

import history from '../history';

class App extends Component {

  render() {
    return (
      <div className="container" id="app-root">
        <Router history={history}>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/personal" exact component={Personal} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
        </Router>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return ({
    appSections: state.appSections
  })
}

export default connect(
  mapStateToProps, {fetchAppSections}
)(App);
