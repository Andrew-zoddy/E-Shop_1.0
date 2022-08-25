import React from "react";
import css from './Preloader.module.css'

const Preloader = ({text}) => {

    return(
        <div>

            <div className={css.preloader_wrapper}>{text}</div>

        </div>


    )
}

export default Preloader