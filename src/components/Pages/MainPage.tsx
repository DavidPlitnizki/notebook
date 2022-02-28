import React from 'react';
import Form from '../Form/Form'
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/TaskSlice';
import {ITask} from '../../interfaces/interfaces';
import {useStorage} from '../../hooks/useStorage';
import {useSelector} from 'react-redux';
import { RootState } from '../../store';

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const {save} = useStorage();

    const themeStyle = useSelector((state: RootState) => state.theme.theme);

    const addNewtask = (task: ITask) => {
        save(task);
        dispatch(addTask(task))
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 center">
                    <Form onAddTask={addNewtask} theme={themeStyle} />
                </div>
            </div>
        </div>
    )
}

export default Main;