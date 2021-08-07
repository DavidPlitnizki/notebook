import React, { useState, useEffect, useRef } from 'react';
import {useSelector} from 'react-redux';
import Note from '../Note/Note';
import { ITask } from '../../interfaces/interfaces';
import { RootState } from '../../store';
import Board from '../../components/Board/Board';
import "./styles.css";


const Listpage = () => {
    const tasksList = useSelector((state: RootState) => state.tasks.tasks);
    // const [progressTasks, setProgressTask] = useState([]);
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        console.log("before cnd: ", tasksList)
        if(tasksList.length) {
            console.log("in cnd: ", tasksList)
            setTasks(tasksList);
        }
    },[tasksList])

    
    return (
        <Board list={tasks} />
    )
}

export default Listpage;