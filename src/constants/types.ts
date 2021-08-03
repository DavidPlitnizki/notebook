import {ITask} from '../interfaces/interfaces';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const ADD_STORED_TASKS = "ADD_STORED_TASKS";

interface addTaskAction {
    type: typeof ADD_TASK
    payload: ITask
}

interface deleteTaskAction {
    type: typeof DELETE_TASK
    payload: number
}

interface addStoredTasksAction {
    type: typeof ADD_STORED_TASKS,
    payload: ITask[]
}

export type TaskActionTypes = addTaskAction | deleteTaskAction | addStoredTasksAction;