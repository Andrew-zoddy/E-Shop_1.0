import React, {useState} from "react";
import css from './Todo.module.scss';
import Task from "../Todo_Task/Task";
import moment from "moment/moment";


const Todo = () => {

    const [taskContentState, setTaskContentState] = useState()
    const [tasksState, setTasksState] = useState([])

    const addTask = (content) => {
        if (!taskContentState) return;
        const tasksStateArray = [...tasksState]
        let taskObj =
            {
                id: null,
                title: '',
                content: '',
                date: '',
            };
        taskObj.id = tasksState.length + 1;
        taskObj.title = `Task # ${tasksState.length + 1}`;
        taskObj.content = content;
        taskObj.date = moment().format('YYYY-MM-DD HH:mm')
        tasksStateArray.push(taskObj)
        setTasksState(tasksStateArray)
        setTaskContentState('')
        return tasksState
    }

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
                    />
                </span>
                <span>
                    <button
                        className={css.task_creation_button}
                        onClick={() => addTask(taskContentState)}>create task</button>
                </span>
            </div>
            <div className={css.todos_content_wrapper}>
                {
                    tasksState.map((task) => <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        content={task.content}
                        date={task.date}
                        setTasksState={setTasksState}
                        tasksState={tasksState} />
                    )
                }
            </div>

        </div>

    )
}

export default Todo;