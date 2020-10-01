
import React, { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTitle from './PageTitle/PageTitle';
const Layout = ({ children, pageTitle }) => {
    return (
        <>
            <aside className="dashboard__right">
                <Header />
                <Suspense fallback="<div>asd f asdfsdfdsfasf s</div>">
                <main role="main">
                    <PageTitle title={pageTitle} />
                    {children}
                </main>
                </Suspense>
                
                <Footer />
            </aside>
        </>
    )
}


export default Layout