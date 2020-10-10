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
        <Route path="/about/" exact={true}>
          <About />
        </Route>
        <Route path="/projects/" exact={true}>
          <Projets />
        </Route>
        <Route path="/projects/addproject/" exact={true}>
        <AddProject />
        </Route>
        <Route path="/users/" exact={true}>
          <Users />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </>
  )
}
export default Routes