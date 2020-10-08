import React from 'react';
import style from './Card.module.scss';
const CardTitle = (props) => {
    return (
        <>
            <div className={style.card__title}>
                        {props.children}
            </div>
        </>
    )
}
export default CardTitle





