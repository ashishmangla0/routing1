import React from 'react';
import Search from '../components/Search/Search';
const Header  = () =>{
    return (
        <>
            <header className="header header--right">
            <div className="mr-auto">
            This is right side header
            </div>
            <Search/>
            </header>
        </>
    )
}
export default Header