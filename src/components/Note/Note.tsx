import React from 'react';
import {ITask} from '../../interfaces/interfaces';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/TaskSlice';
import {useStorage} from '../../hooks/useStorage';



const Note: React.FC<ITask> = ({id, title, desc}) => {
    const dispatch = useDispatch();
    const {removeTask} = useStorage();

    const deleteNote = (id: number) => {
        removeTask(id);
        dispatch(deleteTask(id));
    }

    return (
        <div className="card child-shadows-hover" style={{width: "15rem"}} draggable>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <hr />
                <p className="card-text">{desc}</p>
                <div className="btn_wrapper">
                    <button className="btn-danger" onClick={()=>deleteNote(id)} >Delete Note</button>
                </div>
            </div>
        </div>
        
    )
}

export default Note;