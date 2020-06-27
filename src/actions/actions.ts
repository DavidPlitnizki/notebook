import {ADD_TASK, DELETE_TASK, TaskActionTypes} from '../constants/types';
import {ITask, IIDTask} from '../interfaces/interfaces';

export function addTask(newTask: ITask): TaskActionTypes {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export function deleteTask(task: any): TaskActionTypes {
    return {
        type: DELETE_TASK,
        payload: task
    }
}