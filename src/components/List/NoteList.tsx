import React from 'react';
import { ITask } from '../../interfaces/interfaces';

import Note from '../Note/Note';

interface IProps {
    data: ITask[],
    onDrag:(e: any, task: ITask) => void
}

const NoteList:React.FC<IProps> = ({data, onDrag}) => {
    return (
        <>
         {(data.length > 0) ? data.map((task: ITask)=>{
                    const data = {
                        id: task.id,
                        title: task.title,
                        desc: task.desc,
                        status: task.status
                    }
                    return(
                        <Note key={task.id}
                                data={data}
                                dragStart={(e: any) => onDrag(e, task)}
                                 />
                    )
                }) : <h1 className="no_notes">NO NOTES</h1>}
            </>
    )
}

export default NoteList;