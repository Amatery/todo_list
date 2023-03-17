import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoListRequests } from 'api/todos.requests'
import { notifications } from 'components/atoms/notifications/notifications'
import { CreateTodoInterface, ErrorNotificationInterface, TodoListInterface, UpdateTodoInterface } from 'types/types'

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
        notifications.errorNotification(e)
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
    title,
    description,
    status
  }: UpdateTodoInterface): Promise<UpdateTodoInterface> => {
    await todoListRequests.todoUpdate(id, title, description, status)
    return {
      id,
      title,
      description,
      status
    }
  }
)
