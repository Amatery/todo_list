import { createSlice } from '@reduxjs/toolkit'
import { deleteTodo, getTodos, postTodo, updateTodo } from 'store/todoSlice/todo.thunks'
import { TodoListInterface } from 'types/types'

export interface TodosState {
  todosList: TodoListInterface[];
  selectedTodoId: string | null;
  isTodosLoading: boolean;
  isCreateModalOpen: boolean;
  isUpdateModalOpen: boolean;
}

const initialState: TodosState = {
  todosList: [],
  selectedTodoId: null,
  isTodosLoading: false,
  isCreateModalOpen: false,
  isUpdateModalOpen: false,
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleCreateTodoModal: (state) => {
      state.isCreateModalOpen = !state.isCreateModalOpen
    },
    toggleUpdateTodoModal: (state) => {
      state.isUpdateModalOpen = !state.isUpdateModalOpen
    },
    getSelectedTodoId: (state, { payload }) => {
      state.selectedTodoId = payload.id
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getTodos.pending, (state: TodosState) => {
      state.isTodosLoading = true
    })
    addCase(getTodos.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = payload.todos
      state.isTodosLoading = false
    })
    addCase(getTodos.rejected, (state: TodosState) => {
      state.isTodosLoading = false
    })
    addCase(postTodo.pending, (state: TodosState) => {
      state.isTodosLoading = true
    })
    addCase(postTodo.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = [...state.todosList, payload.newTodo]
      state.isTodosLoading = false
    })
    addCase(postTodo.rejected, (state: TodosState) => {
      state.isTodosLoading = false
    })
    addCase(deleteTodo.pending, (state: TodosState) => {
      state.isTodosLoading = true
    })
    addCase(deleteTodo.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = state.todosList.filter((t) => t.id !== payload.todoId)
      state.isTodosLoading = false
    })
    addCase(deleteTodo.rejected, (state: TodosState) => {
      state.isTodosLoading = false
    })
    addCase(updateTodo.pending, (state: TodosState) => {
      state.isTodosLoading = true
    })
    addCase(updateTodo.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = [
        ...state.todosList.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              ...payload,
            }
          }
          return todo
        }),
      ]
      state.isTodosLoading = false
    })
    addCase(updateTodo.rejected, (state: TodosState) => {
      state.isTodosLoading = false
    })
  },
})

export const { getSelectedTodoId, toggleCreateTodoModal, toggleUpdateTodoModal } = todosSlice.actions

export default todosSlice.reducer
