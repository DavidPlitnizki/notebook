import React from 'react';
import Form from '../Form/Form'
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../actions/actions'
import {ITask} from '../../interfaces/interfaces';

interface ITasksState  {
    tasksState: any;
}

const Main: React.FC = () => {
    const dispatch = useDispatch();

    const tasksList = useSelector((state: ITasksState) => state.tasksState.tasks);
    console.log("Main: ", tasksList);

    const addNewtask = (task: ITask) => {
        dispatch(addTask(task))
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 center">
                    <Form onAddTask={addNewtask} />
                </div>
            </div>
        </div>
    )
}

export default Main;