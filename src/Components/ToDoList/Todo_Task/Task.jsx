import React from "react";
import css from './Task.module.scss';


const Task = ({id,title,content,date,tasksState,setTasksState}) => {

    const newTasksArr = [...tasksState];

    const deleteTask = (taskId) => {
        const updateTaskArr = newTasksArr.filter((task) => task.id !==taskId)
        setTasksState(updateTaskArr)
    }

    return (

        <div className={css.task_wrapper}>
            <div className={css.task_title}>{title}<br/>{date}
                <div className={css.close_btn} onClick={()=> deleteTask(id)}>+</div>
            </div>

            <div className={css.task_content}>{content}</div>
        </div>



    )
}

export default Task;