import React, { useState, useEffect, useRef } from 'react';
import {useSelector} from 'react-redux';
import Note from '../Note/Note';
import { ITask } from '../../interfaces/interfaces';
import { RootState } from '../../store';
import "./styles.css";


const Listpage = () => {
    const tasksList = useSelector((state: RootState) => state.tasks.tasks);
    const [progressTasks, setProgressTask] = useState([]);
    const [tasks, setTasks] = useState(tasksList);


    useEffect(() => {
        setTasks(tasksList);
    },[tasksList])

    
    return (
        <div>
            <div>
                <span>TODO</span>
                {(tasks.length > 0) ? tasks.map((task: ITask)=>{
                    return(
                        <Note key={task.id} id={task.id} title={task.title} desc={task.desc} />
                    )
                }) : <h1 className="no_notes">NO NOTES</h1>}
            </div>

            <div>
                <span>in progress</span>
            </div>
        </div>
    )
}

export default Listpage;