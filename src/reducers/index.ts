import { taskReducer } from './TaskReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  tasksState: taskReducer
})

export default rootReducer;