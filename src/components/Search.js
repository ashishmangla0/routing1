import React from 'react';
import  {ReactComponent as SearchIcon} from '../icons/search.svg';
const Search = () =>{
return(
    <>
        <div className="">
            <input type="text" className="search__input" />
            <SearchIcon className="search__icon"/>
        </div>

        <style jsx="true">{`
        .search__input{
            width: 14rem;
    background-color: #D2DFEA;
    padding-right: 2rem;
        }
        `}</style>
    </>
)
}
export default Search