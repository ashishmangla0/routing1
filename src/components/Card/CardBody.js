import React from 'react';
import style from './Card.module.scss';
const CardBody = (props) => {
    return (
        <>
            <div className={style.card__body}>
                        {props.children}
            </div>
        </>
    )
}
export default CardBody





