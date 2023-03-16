import type { RootState } from 'store/store'
export const todoListSelector = (state: RootState): any => {
  return state.todos.todosList
}
