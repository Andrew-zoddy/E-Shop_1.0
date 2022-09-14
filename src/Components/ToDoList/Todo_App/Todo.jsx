import React, {useEffect, useState} from "react";
import css from './Todo.module.scss';
import Task from "../Todo_Task/Task";
import moment from "moment/moment";
import {logDOM} from "@testing-library/react";


const Todo = () => {

    const [taskContentState, setTaskContentState] = useState()
    const [tasksState, setTasksState] = useState(JSON.parse(localStorage.getItem('items')))
    const [adding, setAdding] = useState(0)

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if (items) setTasksState(items)
    // }, [])


    const onAddTask = (content) => {
        setAdding(adding + 1)
        if (!taskContentState) return;
        const tasksStateArray = [...tasksState]
        let taskObj =
            {
                id: null,
                status: 'active',
                title: '',
                content: '',
                date: '',
            };
        taskObj.id = tasksState.length + 1;
        taskObj.title = `Task # `;            //${tasksState.length + 1}
        taskObj.content = content;
        taskObj.date = moment().format('YYYY-MM-DD HH:mm')
        tasksStateArray.push(taskObj)
        setTasksState(tasksStateArray)
        setTaskContentState('')
        return tasksState
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(tasksState));
    }, [tasksState]);


    return (

        <div className={css.todo_wrapper}>
            <div className={css.todo_container}>
                <span>
                    <input
                        type={"text"}
                        className={css.task_input}
                        placeholder={'Type your task...'}
                        value={taskContentState}
                        onChange={(e) => setTaskContentState(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && onAddTask(taskContentState)}
                    />
                </span>
                <span>
                    <button
                        className={css.task_creation_button}
                        onClick={() => onAddTask(taskContentState)}>create task</button>
                </span>
            </div>
            <div className={css.todos_content_wrapper}>
                {
                    tasksState.map((task, index) => <Task
                        key={task.id}
                        index={index}
                        task={task}
                        setTasksState={setTasksState}
                        tasksState={tasksState} />
                    )

                }
            </div>

        </div>

    )
}

export default Todo;