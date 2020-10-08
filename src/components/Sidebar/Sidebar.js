import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import menuLinks from '../../staticData/menuLInks.json';
import style from './Sidebar.module.scss';
const Sidebar = () => {
    return (
        <>
            <aside className={style.sidebar}>
                <div className="header header--left">
                    Left Header top content
                </div>
                <nav className={style.sidebar__nav}>
                    <ul>
                        {menuLinks.map((item, key) => <li key={item.Link}>
                            <NavLink exact to={item.Path} activeClassName={style.sidebar__selected} className={style.sidebar__link}>
                                
                                <ReactSVG src={item.Icon} className={style.sidebar__icon}/>
                                
                                <div className={style.sidebar__title}>
                                    {item.Link}
                                </div>
                            </NavLink>
                        </li>)}
                    </ul>
                </nav>
            </aside>
        </>
    )
}
export default Sidebar
