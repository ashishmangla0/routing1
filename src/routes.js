import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Projets from './pages/Projects/Projects';
import Users from './pages/Users/Users';
import Error404 from './pages/Errors/404';
import AddProject from './pages/Projects/AddProject';
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
        <Router path="/project/addproject">
          <AddProject/>
        </Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
            <Error404 />
          </Route>
      </Switch>
    </>
  )
}
export default Routes