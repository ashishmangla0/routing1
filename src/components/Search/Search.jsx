import React from 'react';
import Style from './Search.module.scss';
import { ReactSVG } from 'react-svg';
const Search = () => {
    return (
        <>
            <div className={Style.search}>
                <input type="text" className={Style.search__input} />
                <ReactSVG src="/icons/search.svg" className={Style.search__icon} />
            </div>
        </>
    )
}

export default Search