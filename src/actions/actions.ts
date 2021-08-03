import {ADD_TASK, DELETE_TASK, ADD_STORED_TASKS, TaskActionTypes} from '../constants/types';
import {ITask} from '../interfaces/interfaces';

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

export function addStoredTasks(tasks: ITask[]): TaskActionTypes {
    return {
        type: ADD_STORED_TASKS,
        payload: tasks
    }
}