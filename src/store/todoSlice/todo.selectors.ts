import type { RootState } from 'store/store'
import { TodoListInterface } from 'types/types'

export const todoListSelector = (state: RootState): TodoListInterface[] => {
  return state.todos.todosList
}

export const selectedTodoId = (state: RootState): string | null => {
  return state.todos.selectedTodoId
}
export const isTodoListLoading = (state: RootState): boolean => {
  return state.todos.isTodosLoading
}

export const isCreateModalOpen = (state: RootState): boolean => {
  return state.todos.isCreateModalOpen
}

export const isUpdateModalOpen = (state: RootState): boolean => {
  return state.todos.isUpdateModalOpen
}
