import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ChatIcon } from '../chat.svg';
import { ReactComponent as HomeIcon } from '../home.svg';
import test from '../bgsvg.svg';
import menuLinks from '../staticData/menuLInks.json';
console.log(menuLinks);
const Sidebar = () => {
    return (
        <>
            <aside className="dashboard__left">
                <div className="header header--left">
                    Left Header top content
                </div>
                <nav className="dashboard__nav">
                    <ul>
                        {menuLinks.map((item) => <><li className="dashboard__nav-item">
                            <NavLink exact to={item.Path} activeClassName="selected" className="dashboard__nav-link">
                                <div className="dashboard__nav-icon">
                                   
                                </div>
                                <div className="dashboard__nav-title">
                                    {item.Link}
                                </div>
                            </NavLink>
                        </li></>)}

                        <li className="dashboard__nav-item">
                            <NavLink exact to="/" activeClassName="selected" className="dashboard__nav-link">
                                <div className="dashboard__nav-icon">
                                    <HomeIcon />
                                </div>
                                <div className="dashboard__nav-title">          
                                    Home
                                </div>
                            </NavLink>
                        </li>
                        <li className="dashboard__nav-item">
                            <NavLink exact to="/about" activeClassName="selected" className="dashboard__nav-link">
                                <div className="dashboard__nav-icon">
                                    <ChatIcon />
                                </div>
                                <div className="dashboard__nav-title">
                                    About
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <style jsx="true">{`
      .dashboard__nav-link.selected::before,.dashboard__nav-link.selected::after{
        background-image:url(${test})
      `}
            </style>
        </>
    )
}
export default Sidebar
