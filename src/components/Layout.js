
import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
        <>
        <aside className="dashboard__right">
        <Header/>
        <main role="main">
            {children}
        </main>
        <Footer/>
        </aside>
    





      
        </>
    )
}


export default Layout