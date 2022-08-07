import React from "react";
import css from './Main.module.scss';
import {Route, Routes} from "react-router-dom";
import Products from "../Products/Products";
import Todo from "../ToDoList/Todo_App/Todo";

const Main = () => {

    return (

        <div className={css.main_wrapper}>
            <Routes>
                <Route element={<Products />} path={'/products'} />
                <Route element={<Todo />} path={'/todolist'} />
            </Routes>

            <div className={css.title_welcome}></div>

        </div>

    )
}

export default Main;