import React from 'react';
import About from './pages/about';
import Home from './pages/home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
const Routes = () =>{
    return(
        <>
        

   

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Router path="/about">
          <About />
        </Router>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
        </>
    )
}
export default Routes