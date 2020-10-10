import React from 'react';
import { ReactSVG } from 'react-svg';
// import  {ReactComponent as SearchIcon} from '../icons/search.svg';
const Search = () =>{
return(
    <>
        <div className="search">
            <input type="text" className="search__input" />
            <ReactSVG src="/icons/search.svg" className="search__icon"/>
            {/* <SearchIcon className="search__icon"/> */}
        </div>

      
    </>
)
}
export default Search