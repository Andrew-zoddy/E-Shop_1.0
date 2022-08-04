import React from "react";
import css from './Main.module.scss';
import {Route, Routes} from "react-router-dom";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";
import Photos from "../Photos/Photos";
import Todo from "../ToDoList/Todo_App/Todo";

const Main = () => {

    return (

        <div className={css.main_wrapper}>
            <Routes>
                <Route element={<Users />}  path={'/users'} />
                <Route element={<Posts />}  path={'/posts'} />
                <Route element={<Comments />} path={'/comments'} />
                <Route element={<Photos />} path={'/photos'} />
                <Route element={<Todo />} path={'/todolist'} />
            </Routes>

            <div className={css.title_welcome}></div>

        </div>

    )
}

export default Main;