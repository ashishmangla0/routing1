
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTitle from './PageTitle';
const Layout = ({ children,pageTitle }) => {
    return (
        <>
        <aside className="dashboard__right">
        <Header/>
        <main role="main">
                <PageTitle title={pageTitle} />
            {children}
        </main>
        <Footer/>
        </aside>
    





      
        </>
    )
}


export default Layout