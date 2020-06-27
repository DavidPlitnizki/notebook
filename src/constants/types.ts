import {ITask, IIDTask} from '../interfaces/interfaces';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

interface addTaskAction {
    type: typeof ADD_TASK
    payload: ITask
}

interface deleteTaskAction {
    type: typeof DELETE_TASK
    payload: number
}

export type TaskActionTypes = addTaskAction | deleteTaskAction;