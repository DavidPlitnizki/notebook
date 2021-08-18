import {ITask, ITaskState} from '../interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: ITaskState = {
    tasks: []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
       // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    addTask: (state, action: PayloadAction<ITask>) => {
        // state.tasks.push(action.payload)
        const newState = [...state.tasks, action.payload];
        state.tasks = newState;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
        const filtredTasks = state.tasks.filter((task) => task.id !== action.payload);
        state.tasks = filtredTasks;
    },
    addStoredTasks: (state, action: PayloadAction<ITask[]>) => {
        const newState = [...state.tasks, ...action.payload];
        state.tasks = newState;
    },
    updateStatusTask: (state, action: PayloadAction<ITask>) => {
      console.log("action: ",action);
      const newState = state.tasks.filter((task) => task.id !== action.payload.id);
      console.log("newState: ",newState);
      newState.push(action.payload);
      state.tasks = newState;
      // debugger;   
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, addStoredTasks, updateStatusTask } = taskSlice.actions

export default taskSlice.reducer