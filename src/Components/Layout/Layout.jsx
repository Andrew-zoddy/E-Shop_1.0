import React from "react";
import css from './Layout.module.scss';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";



const Layout = () => {

    return (

        <div className={css.layout_wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>

    )
}

export default Layout;