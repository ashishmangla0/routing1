import React, { Suspense } from 'react';
import Header from '../components/Header/Header';
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
            </aside>
        </>
    )
}


export default Layout