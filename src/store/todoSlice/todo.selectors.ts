import type { RootState } from 'store/store'
import { TodoListInterface } from 'types/types'

export const todoListSelector = (state: RootState): TodoListInterface[] => {
  return state.todos.todosList
}

export const selectedTodoId = (state: RootState): string => {
  return state.todos.selectedTodoId
}
export const isTodoListLoading = (state: RootState): boolean => {
  return state.todos.isTodosLoading
}

export const isTodoListUpdating = (state: RootState): boolean => {
  return state.todos.isTodoListUpdating
}

export const isCreateModalOpen = (state: RootState): boolean => {
  return state.todos.isCreateModalOpen
}

export const isUpdateModalOpen = (state: RootState): boolean => {
  return state.todos.isUpdateModalOpen
}

export const isDeleteModalOpen = (state: RootState): boolean => {
  return state.todos.isDeleteModalOpen
}
