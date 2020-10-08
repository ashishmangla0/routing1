import React from 'react';
import style from './Grid.module.scss';
const  Grid = (props) => {
    return (
      <>
        <div className={`${style.grid} ${props.class}`}>
            {props.children}
        </div>
      </>
    );
  }
  export default Grid