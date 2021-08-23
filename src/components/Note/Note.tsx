import React from 'react';
import styles from './Note.module.css';

import {ITask} from '../../interfaces/interfaces';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/TaskSlice';
import {useStorage} from '../../hooks/useStorage';

interface IProps {
   data: ITask,
   dragStart:(e: any) => void
}



const Note: React.FC<IProps> = ({data, dragStart}) => {
    const dispatch = useDispatch();
    const {removeTask} = useStorage();

    const deleteNote = (id: number) => {
        removeTask(id);
        dispatch(deleteTask(id));
    }

    return (
        <div className="card child-shadows-hover" draggable onDragStart={dragStart}>
            <div className="card-body">
                <h4 className="card-title">{data.title}</h4>
                <hr />
                <h5 className="card-title">status: {data.status}</h5>
                <hr />
                <pre className={`card-text ${styles.pre_init}`}>{data.desc}</pre>
                <div className="btn_wrapper">
                    <button className="btn-danger" onClick={()=>deleteNote(data.id)} >Delete Note</button>
                </div>
            </div>
        </div>
        
    )
}

export default Note;