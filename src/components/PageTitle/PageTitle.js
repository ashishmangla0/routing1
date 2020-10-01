import React from 'react';
import PropTypes from 'prop-types';
import style from './PageTitle.module.scss'
const PageTitle = ({ children, title }) => {
    return (
        <>
            <div className={style.pagetitle}>
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