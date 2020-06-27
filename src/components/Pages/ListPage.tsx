import React from 'react';
import {useSelector,useStore} from 'react-redux';
import Note from '../Note/Note';
import {ITask} from '../../interfaces/interfaces';

interface ITasksState  {
    tasksState: any;
}

const Listpage = () => {

    const store = useStore();
    console.log('list store: ', store.getState())

    const tasksList = useSelector((state: ITasksState) => state.tasksState.tasks);
    console.log("list: ", tasksList);
    
    return (
        <div>
            {tasksList.map((task: ITask)=>{
                return(
                    <Note key={task.id} id={task.id} title={task.title} desc={task.desc} />
                )
            })}
        </div>
    )
}

export default Listpage;