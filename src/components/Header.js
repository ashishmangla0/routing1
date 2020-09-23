import React from 'react';
import Search from './Search';
const Header  = () =>{
    return (
        <>
            <header className="header header--right">
            This is right side header
            <Search/>
            </header>
        </>
    )
}
export default Header