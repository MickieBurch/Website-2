import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mains from './components/Mains';
import Sweets from './components/Sweets';
import Appetizers from './components/Appetizers';
import BookNow from './components/BookNow';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/components/Mains">
          <Mains />
        </Route>
        <Route path="/components/Sweets">
          <Sweets />
        </Route>
        <Route path="/components/Appetizers">
          <Appetizers />
        </Route>
        <Route path="/booknow">
          <BookNow />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;