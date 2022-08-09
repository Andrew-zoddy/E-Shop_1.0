import React, {useState} from "react";
import css from './Category.module.scss';
import {NavLink} from "react-router-dom";


const Category = ({category}) => {

    return (

        <NavLink to={'/category'}>
            <div className={css.category_wrapper}>
                <div className={css.category_item}>{category}</div>
            </div>
        </NavLink>
    )
}

export default Category