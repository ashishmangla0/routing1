import React from 'react';
import  {ReactComponent as SearchIcon} from '../icons/search.svg';
const Search = () =>{
return(
    <>
        <div className="search">
            <input type="text" className="search__input" />
            <SearchIcon className="search__icon"/>
        </div>

        <style jsx="true">{`
        .search{
            position:relative;
        }
        .search__input{
            width: 14rem;
            background-color: #D2DFEA;
            padding-right: 2rem;
            line-height:inherit;
            border-radius:50px;
            border:0;
        }
        .search__icon{
            width: 1.25rem;
            height: 1.25rem;
            position: absolute;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            margin-right: 0.75rem;
            right: 0;
            color: #365A74;
        }
        `}</style>
    </>
)
}
export default Search