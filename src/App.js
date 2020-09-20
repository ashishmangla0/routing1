import React from "react";
import { Link, NavLink } from "react-router-dom";
import Routes from "./routes";
import test from './bgsvg.svg'
function App() {
  return (
    <>
      <div className="dashboard">
        <aside className="dashboard__left">
        <div style={{height: `100px`}}>
          asfdf asfasd f 
        </div>
          <nav className="dashboard__nav">
            <ul>
              <li className="dashboard__nav-item">
                <NavLink exact to="/" activeClassName="selected" className="dashboard__nav-link">Home</NavLink>
              </li>
              <li className="dashboard__nav-item">
                <NavLink exact to="/about" activeClassName="selected" className="dashboard__nav-link">About</NavLink>
              </li>
            
            </ul>
          </nav>
        </aside>
        <Routes />
      </div>


      <style jsx="true">{`
      .dashboard__nav-link.selected::before{
        background-image:url(${test})
        
      `}
        
      </style>
    </>
  );
}
export default App;