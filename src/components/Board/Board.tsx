import React,{useState, useRef, useEffect} from 'react';
import { ITask } from '../../interfaces/interfaces';
import styles from './Board.module.css';

import Note from '../Note/Note';

interface IProps {
    list: ITask[]
}

const Board: React.FC<IProps> = (props: IProps) => {
    const [todoTasks, setTodoTasks] = useState(props.list);

    console.log(props)

    const onDragOverHandler= (e: any) => {
        e.preventDefault();
        console.log("dragOver")
        // console.log(e.target as HTMLDivElement);
        e.stopPropagation();
    }

    const onDragStartHandler = (e: any) => {
        console.log("drag start");
        console.log(e)
        // e.dataTransfer.setData("id", 123)
    }

    const onDropHandler = (e: any, status: any) => {
        console.log("drop");
        console.log(e);
        console.log(status);

        // console.log(e.dataTransfer.get("id"))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <span draggable onDragStart={(e) => onDragStartHandler(e)}>TODO</span>
                <div className={styles.target}>
                {(todoTasks.length > 0) ? todoTasks.map((task: ITask)=>{
                    return(
                        <Note key={task.id}
                                id={task.id}
                                title={task.title}
                                desc={task.desc} />
                    )
                }) : <h1 className="no_notes">NO NOTES</h1>}
                </div>
            </div>
            <div className={styles.col}>
                <span>IN PROGRESS</span>
                <div className={styles.target} 
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDrop={(e) => onDropHandler(e, "complete")} >
                        here
                </div>
            </div>
            <div className={styles.col}>
                <span>DONE</span>
                <div className={styles.target}>here</div>
            </div>
        </div>
    )
}

export default Board;