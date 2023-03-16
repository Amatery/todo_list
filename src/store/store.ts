import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todoSlice/todo.slice'

const initialState = {}
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: initialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
