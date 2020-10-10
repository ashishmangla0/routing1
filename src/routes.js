import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Projets from './pages/Projects/Projects';
import Users from './pages/Users/Users';
import AddProject from './pages/Projects/AddProject';
import { BrowserRouter as Router, Switch, Route,withRouter } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Router path="/about/" exact={true}>
          <About />
        </Router>
        <Router path="/projects/" exact={true}>
          <Projets />
        </Router>
        <Router path="/projects/addproject/" exact={true} component={withRouter(AddProject)}/>
        <Router path="/users/" exact={true}>
          <Users />
        </Router>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </>
  )
}
export default Routes