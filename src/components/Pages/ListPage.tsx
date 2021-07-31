import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import Note from '../Note/Note';
import { ITask } from '../../interfaces/interfaces';
import {useStorage} from '../../hooks/useStorage';
import "./styles.css";

interface ITasksState  {
    tasksState: any;
}

const Listpage = () => {
    const tasksList = useSelector((state: ITasksState) => state.tasksState.tasks);
    const [tasks, setTasks] = useState(tasksList);
    const { getAll } = useStorage();

    useEffect(() => {
        const storedTasks = getAll();
        setTasks(storedTasks);
    },[])

    useEffect(() => {
        setTasks(tasksList);
    },[tasksList])

    
    return (
        <div>
            {(tasks.length > 0) ? tasks.map((task: ITask)=>{
                return(
                    <Note key={task.id} id={task.id} title={task.title} desc={task.desc} />
                )
            }) : <h1 className="no_notes">NO NOTES</h1>}
        </div>
    )
}

export default Listpage;