import React, {useEffect} from "react";
import "antd/dist/antd.css";
import {NavLink, Route, Routes} from "react-router-dom";
import Products from './Components/Products/Products'
import {Layout, Menu, message} from 'antd';
import MainPage from "./Components/MainPage/MainPage";
import css from './App.module.scss';
import Footer from './Components/Footer/Footer'
import {useSelector} from "react-redux";
import AntTable from "./Components/AntTable/AntTable";



const App = () => {
    const { Header, Content } = Layout;

    const error = useSelector(state => state.app.error)
    const success = useSelector(state => state.app.success)


    useEffect(() => {
        if (!error) return
        message.error(error.message);
    },[error])


    useEffect(() => {
        if (!success) return
        message.success(success);
    },[success])






    return (
        <Layout className={css.layout} >
            <Header className={css.header}>
                <div className={css.logo_container}/>
                <Menu
                    theme=""
                    mode="horizontal"

                >
                    <Menu.Item key={'1'}>

                        <NavLink to={'/'}>
                            <div className={css.nav_item}>Main Page</div>
                        </NavLink>

                    </Menu.Item>
                    <Menu.Item key={'2'}>
                        <NavLink to={'/products'}>
                            <div className={css.nav_item}>Products</div>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key={'3'}>
                        <NavLink to={'/table'}>
                            <div className={css.nav_item}>Ant Table</div>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className={css.content_container}
            >
                <div className={"site-layout-content"}>

                    <Routes>
                        <Route element={<MainPage/>} exact path={'/'}/>
                        <Route element={<Products/>} exact path={'/products'}/>
                        <Route element={<AntTable/>} exact path={'/table'}/>
                        <Route element={<div style={{textAlign: "center"}}>ERROR 404 - page not found</div>}  path={'/*'}/>
                    </Routes>
                </div>
            </Content>
            <Footer />




        </Layout>
    )
};



export default App;
