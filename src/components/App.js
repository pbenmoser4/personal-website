import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Personal from './Personal';
import Resume from './Resume/Resume';
import Contact from './Contact';

import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header/>
        <div className="ui main container" style={{marginTop:"7em"}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/personal" exact component={Personal} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  )
};

export default App;
