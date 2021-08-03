import {ADD_TASK, DELETE_TASK, ADD_STORED_TASKS, TaskActionTypes} from '../constants/types';
import {ITaskState} from '../interfaces/interfaces';

const initialState: ITaskState = {
    tasks: []
}

export function taskReducer(
    state = initialState,
    action: TaskActionTypes
): ITaskState {
    switch(action.type) {
        case ADD_TASK: 
            return {
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            const newTask = state.tasks.filter(
                    task => task.id !== action.payload
                )

            return {
                tasks: newTask
            }
        case ADD_STORED_TASKS:
            const newTasks = [...state.tasks, ...action.payload]
            return{
                tasks: newTasks
            }
            
        default:
            return state;
    }
    
}