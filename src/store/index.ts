import { configureStore } from '@reduxjs/toolkit'
import taskSliceReducer from './TaskSlice'
import themeSliceReducer from './ThemeSlice'

export const store = configureStore({
  reducer: {
      tasks: taskSliceReducer,
      theme: themeSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch