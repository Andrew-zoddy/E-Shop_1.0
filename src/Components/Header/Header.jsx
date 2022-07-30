import React from "react";
import css from './Header.module.scss';
import {NavLink} from "react-router-dom";


const Header = () => {

    return (

        <div className={css.header_wrapper}>

            <div className={css.logo_container}>
                <NavLink to={'/'}>
                    <div className={css.logo}>хвейсbook</div>
                </NavLink>

            </div>

            <div className={css.menu_container}>
                <ul className={css.nav_block}>

                    <NavLink to={'/users'}>
                        <li className={css.nav_item}>users</li>
                    </NavLink>

                    <NavLink to={'/posts'}>
                        <li className={css.nav_item}>posts</li>
                    </NavLink>

                    <NavLink to={'/comments'}>
                        <li className={css.nav_item}>comments</li>
                    </NavLink>

                    <NavLink to={'/photos'}>
                        <li className={css.nav_item}>photos</li>
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