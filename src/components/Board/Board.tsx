import React,{useState, useRef, useEffect} from 'react';
import { ITask } from '../../interfaces/interfaces';
import styles from './Board.module.css';
import {useDispatch} from 'react-redux';

import { updateStatusTask } from '../../store/TaskSlice';
import NoteList from '../List/NoteList';
import {useStorage} from '../../hooks/useStorage';

interface IProps {
    list: ITask[]
}

const Board: React.FC<IProps> = (props: IProps) => {
    const [todoTasks, setTodoTasks] = useState<ITask[]>([]);
    const [progressTasks, setProgressTasks] = useState<ITask[]>([]);
    const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

    const dragItem = useRef() as React.MutableRefObject<ITask>;
    
    const dispatch = useDispatch();
    const { updateTask } = useStorage();

    useEffect(() => {
        console.log("Board: ", props.list)
        setTodoTasks(props.list.filter((task) => task.status === "todo"));
        setProgressTasks(props.list.filter((task) => task.status === "progress"));
        setDoneTasks(props.list.filter((task) => task.status === "done"));
    },[props.list])



    const onDragOverHandler= (e: any) => { e.preventDefault();}

    const onDragStartHandler = (e: any, task: ITask) => {
        console.log("drag start: ", task);
        dragItem.current = task;
        console.log(e)
    }

    const onDropHandler = (e: any, dropTarget: string) => {    
        console.log("drop");
        console.log(dropTarget);
        console.log(dragItem.current);

        if(dropTarget === dragItem.current.status) return;

         if(dropTarget === "todo") {
            const task = dragItem.current;
            filtredDataByTask(task);
            
                const newTask = {
                    id: task.id,
                    desc: task.desc,
                    title: task.title,
                    status: dropTarget
                }
            setTodoTasks([...todoTasks, newTask]);
            dispatch(updateStatusTask(newTask));
            updateTask(newTask);
         }else if(dropTarget === "in progress") {
             const task = dragItem.current;
                filtredDataByTask(task);
              
                const newTask = {
                    id: task.id,
                    desc: task.desc,
                    title: task.title,
                    status: dropTarget
                }
                setProgressTasks([...progressTasks, newTask]);
                dispatch(updateStatusTask(newTask));
                updateTask(newTask);
         }else if(dropTarget === "done") {
            const task = dragItem.current;
            filtredDataByTask(task);

            const newTask = {
                id: task.id,
                desc: task.desc,
                title: task.title,
                status: dropTarget
            }
            setDoneTasks([...doneTasks, newTask]);
            dispatch(updateStatusTask(newTask));
            updateTask(newTask);
        }
    }

    const filtredDataByTask = (task: ITask) => {
        switch(task.status) {
            case "todo":
                const filtredTodoTasks = todoTasks.filter((fromTask) => fromTask.id !== task.id);
                setTodoTasks(filtredTodoTasks);
                break;
            case "in progress":
                const filtredProgressTasks = progressTasks.filter((fromTask) => fromTask.id !== task.id);
                setProgressTasks(filtredProgressTasks);
                break;
            case "done":
                const filtredDoneTasks = doneTasks.filter((fromTask) => fromTask.id !== task.id);
                setDoneTasks(filtredDoneTasks);
                break;
            default: break;
        }
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.col}>
                <span>TODO</span>
                <div className={styles.target}
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "todo")} >
                        <NoteList data={todoTasks} onDrag={onDragStartHandler} />
                </div>
            </div>

            <div className={styles.col}>
                <span>IN PROGRESS</span>
                <div className={styles.target} 
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "in progress")} >
                        <NoteList data={progressTasks} onDrag={onDragStartHandler} />
                </div>
            </div>

            <div className={styles.col}>
                <span>DONE</span>
                <div className={styles.target}
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "done")}>
                        <NoteList data={doneTasks} onDrag={onDragStartHandler} />
                </div>
            </div>
        </div>
    )
}

export default Board;