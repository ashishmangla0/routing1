import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Projets from './pages/Projects/Projects';
import Users from './pages/Users/Users';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Router path="/about">
          <About />
        </Router>
        <Router path="/projects">
          <Projets />
        </Router>
        <Router path="/users">
          <Users />
        </Router>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
export default Routes