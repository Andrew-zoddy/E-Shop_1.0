import React, {useState} from "react";
import css from './Task.module.scss';


const Task = ({task,index,tasksState,setTasksState}) => {
    const [updating, setUpdating] = useState(0)
    const [deleting, setDeleting] = useState(0)

    const newTasksArr = [...tasksState];



    const onDeleteTask = (taskId) => {
        const updateTaskArr = newTasksArr.filter((task) => task.id !==taskId)
        setTasksState(updateTaskArr)
    }

   const onDoneTask =(taskId) => {
        newTasksArr.forEach((task) => {
            if(taskId === task.id) {
                task.status = 'done'
            }
        })
       setTasksState(newTasksArr)
   }



    return (

        <div className={css.task_wrapper}>
            <div className={css.task_title}>{task.title}{index+1}<br/> <br/>{task.date}
                <div className={css.close_btn} onClick={()=> onDeleteTask(task.id)}>+</div>
            </div>

            <div className={css.task_content}>
                {task.status === 'active' &&
                    <span>{task.content}</span>
                }
                {task.status === 'done' &&
                    <span className={css.done_task}>{task.content}</span>
                }

                <span>
                    <button
                        disabled={task.status === 'done'}
                        onClick={() => onDoneTask(task.id)}
                        className={css.done_button}>done</button>
                </span>

            </div>
        </div>



    )
}

export default Task;