import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { ITask } from '../../interfaces/interfaces';
import { RootState } from '../../store';
import Board from '../../components/Board/Board';
import "./styles.css";

const Listpage: React.FC = () => {
    const tasksList = useSelector((state: RootState) => state.tasks.tasks);
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [taskLength, setTaskLength] = useState<number>(0);

    useEffect(() => {
        console.log("before cnd: ", tasksList)
        if(tasksList.length && tasksList.length !== taskLength) {
            console.log("in cnd: ", tasksList)
            console.log("length: ", taskLength);
            setTaskLength(tasksList.length);
            setTasks(tasksList);
        }
    },[tasksList, taskLength]);

    
    return (
        <Board list={tasks} />
    )
}

export default Listpage;