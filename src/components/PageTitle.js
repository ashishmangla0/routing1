import React from 'react';
const PageTitle  = ({children,title}) =>{
    return (
        <>
        <div className="dashboad__title-wrap">
        <h1 class="dashboad__title mr-auto">
            {title}
            </h1>
        </div>
            
        </>
    )
}
export default PageTitle