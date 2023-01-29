import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NextLink from 'next/link';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" e>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
