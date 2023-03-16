import { createAsyncThunk } from '@reduxjs/toolkit'
import { notification } from 'antd'
import { todoListRequests } from 'api/todos.requests'
import { CreateTodoInterface, ErrorNotificationInterface, TodoListInterface } from 'types/types'

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (): Promise<{ todos: TodoListInterface[] }> => {
    const { data } = await todoListRequests.todosGet()
    return { todos: data }
  }
)

export const postTodo = createAsyncThunk(
  'todos/postTodo',
  async ({
    title,
    description
  }: CreateTodoInterface): Promise<{ newTodo: TodoListInterface }> => {
    try {
      const { data } = await todoListRequests.todoPost(title, description)
      return { newTodo: data }
    } catch (e: any) {
      const { errorsMessages } = e.response.data
      // eslint-disable-next-line array-callback-return
      errorsMessages.map((e: ErrorNotificationInterface) => {
        notification.error({
          message: `Whops, something wrong with ${e.field} 😱😱😱`,
          description: e.message
        })
      })
      throw e
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async ({ id }: { id: string }): Promise<{ todoId: string }> => {
    await todoListRequests.todoDelete(id)
    return { todoId: id }
  }
)

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({
    id,
    status
  }: { id: string, status: string }): Promise<any> => {
    await todoListRequests.todoUpdate(id, status)
    return {
      id,
      status
    }
  }
)
