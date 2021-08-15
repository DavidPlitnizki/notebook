import React,{useState, useRef, useEffect} from 'react';
import { ITask } from '../../interfaces/interfaces';
import styles from './Board.module.css';

import Note from '../Note/Note';
import { taskSlice } from '../../store/TaskSlice';

interface IProps {
    list: ITask[]
}

const Board: React.FC<IProps> = (props: IProps) => {
    const [todoTasks, setTodoTasks] = useState<ITask[]>([]);
    const [progressTasks, setProgressTasks] = useState<ITask[]>([]);
    const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

    const dragItem = useRef() as React.MutableRefObject<ITask>;

    useEffect(() => {
        setTodoTasks(props.list)
    },[props.list])

    

    const onDragOverHandler= (e: any) => { e.preventDefault();}

    const onDragStartHandler = (e: any, task: ITask) => {
        console.log("drag start: ", task);
        dragItem.current = task;
        console.log(e)
    }

    const onDropHandler = (e: any, status: string) => {    
        console.log("drop");
        console.log(status);
        console.log(dragItem.current);

        if(status === dragItem.current.status) return;


        
        // const curr = todoTasks.filter((item) => item.id === dragItem.current);
        // const ch = todoTasks.filter((item) => item.id !== dragItem.current);
         if(status === "todo") {
            const task = dragItem.current;
            if(task.status === "in_progress") {
                // removeTask(progressTasks, task);
                const oldTasks = progressTasks.filter((fromTask) => fromTask.id !== task.id);
                setProgressTasks(oldTasks);
            }
            if(task.status === "done") {
                const oldTasks = doneTasks.filter((fromTask) => fromTask.id !== task.id);
                setDoneTasks(oldTasks);
                // removeTask(doneTasks, task);
            } 
        //    addTask(todoTasks, task, "todo");
                const newTask = {
                    id: task.id,
                    desc: task.desc,
                    title: task.title,
                    status
                }
            setTodoTasks([...todoTasks, newTask]);
         }
         if(status === "in_progress") {
             const task = dragItem.current;
                if(task.status === "todo") {
                    // removeTask(todoTasks, task);
                    const oldTasks = todoTasks.filter((fromTask) => fromTask.id !== task.id);
                    setTodoTasks(oldTasks);
                }
                if(task.status === "done") {
                    const oldTasks = doneTasks.filter((fromTask) => fromTask.id !== task.id);
                    setDoneTasks(oldTasks);
                    // removeTask(doneTasks, task);
                } 
                const newTask = {
                    id: task.id,
                    desc: task.desc,
                    title: task.title,
                    status
                }
                setProgressTasks([...progressTasks, newTask]);
            //    addTask(progressTasks, task, "in_progress");
         }
        if(status === "done") {
            const task = dragItem.current;
            if(task.status === "todo") {
                const oldTasks = todoTasks.filter((fromTask) => fromTask.id !== task.id);
                setTodoTasks(oldTasks);
                // removeTask(todoTasks, task);
            }
            if(task.status === "in_progress") {
                const oldTasks = progressTasks.filter((fromTask) => fromTask.id !== task.id);
                setProgressTasks(oldTasks);
                // removeTask(progressTasks, task);
            } 
            const newTask = {
                id: task.id,
                desc: task.desc,
                title: task.title,
                status
            }
            setDoneTasks([...doneTasks, newTask]);
        //    addTask(doneTasks, task, "done");
        }
    }

    const removeTask = (from: ITask[], task: ITask) => {
        const oldTasks = from.filter((fromTask) => fromTask.id !== task.id);
        setTodoTasks(oldTasks);
    }

    const addTask = (to: ITask[], task: ITask, status: string) => {
        const newTask = {
            id: task.id,
            desc: task.desc,
            title: task.title,
            status
        }
     setProgressTasks([...to, newTask]);
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.col}>
                <span>TODO</span>
                <div className={styles.target}
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "todo")} >
                {(todoTasks.length > 0) ? todoTasks.map((task: ITask)=>{
                    const data = {
                        id: task.id,
                        title: task.title,
                        desc: task.desc,
                        status: task.status
                    }
                    return(
                        <Note key={task.id}
                                data={data}
                                dragStart={(e: any) => onDragStartHandler(e, task)}
                                 />
                    )
                }) : <h1 className="no_notes">NO NOTES</h1>}
                </div>
            </div>

            <div className={styles.col}>
                <span>IN PROGRESS</span>
                <div className={styles.target} 
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "in_progress")} >
                        {(progressTasks.length > 0) ? progressTasks.map((task: ITask)=>{
                            const data = {
                                id: task.id,
                                title: task.title,
                                desc: task.desc,
                                status: task.status
                            }
                            return(
                                <Note key={task.id}
                                        data={data}
                                        dragStart={(e: any) => onDragStartHandler(e, task)}
                                        />
                    )
                        }) : <h1 className="no_notes">NO NOTES</h1>}                  
                </div>
            </div>

            <div className={styles.col}>
                <span>DONE</span>
                <div className={styles.target}
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "done")}>
                        {(doneTasks.length > 0) ? doneTasks.map((task: ITask)=>{
                            const data = {
                                id: task.id,
                                title: task.title,
                                desc: task.desc,
                                status: task.status
                            }
                            return(
                            <Note key={task.id}
                                    data={data}
                                    dragStart={(e: any) => onDragStartHandler(e, task)}
                                    />
                            )
                        }) : <h1 className="no_notes">NO NOTES</h1>}  
                </div>
            </div>
        </div>
    )
}

export default Board;