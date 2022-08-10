import React from "react";
import css from './Main.module.scss';
import {Route, Routes} from "react-router-dom";
import Products from "../Products/Products";
import Todo from "../ToDoList/Todo_App/Todo";
import Category from "../Products/CategoryNav/Category/Category";

const Main = () => {

    return (

        <div className={css.main_wrapper}>
            <Routes>
                <Route element={<Products />} path={'/products'} />
                <Route element={<Todo />} path={'/todolist'} />
                <Route element={<Category />} path={'/category'} />
            </Routes>



        </div>

    )
}

export default Main;