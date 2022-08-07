import React from "react";
import css from './Header.module.scss';
import {NavLink} from "react-router-dom";


const Header = () => {

    return (

        <div className={css.header_wrapper}>

            <div className={css.logo_container}>
                <NavLink to={'/'}>
                    <div className={css.logo}>Шмотbook</div>
                </NavLink>

            </div>

            <div className={css.menu_container}>
                <ul className={css.nav_block}>

                    <NavLink to={'/products'}>
                        <li className={css.nav_item}>Products</li>
                    </NavLink>

                    <NavLink to={'/todolist'}>
                        <li className={css.nav_item}>todolist</li>
                    </NavLink>

                </ul>
        </div>
        </div>

    )
}

export default Header;