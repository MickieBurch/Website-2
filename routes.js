import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mains from './components/Mains';
import Sweets from './components/Sweets';
import Appetizers from './components/Appetizers';
import BookNow from './components/BookNow';
import NavBar from './components/Nav-bar';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/Mains">
          <Mains />
        </Route>
        <Route path="/Sweets">
          <Sweets />
        </Route>
        <Route path="/Appetizers">
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
