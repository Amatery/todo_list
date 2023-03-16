import { createAsyncThunk } from '@reduxjs/toolkit'
import { todosGet } from 'api/todos.requests'

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const { data } = await todosGet()
  return { todos: data }
})
