import React from 'react';
import PropTypes from 'prop-types';
const PageTitle = ({ children, title }) => {
    return (
        <>
            <div className="dashboad__title-wrap">
                <h1 className="dashboad__title mr-auto">
                    {title}
                </h1>
            </div>
        </>
    )
}
export default PageTitle

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}