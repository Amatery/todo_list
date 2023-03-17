import { createSlice } from '@reduxjs/toolkit'
import { deleteTodo, getTodos, postTodo, updateTodo } from 'store/todoSlice/todo.thunks'
import { TodoListInterface } from 'types/types'

export interface TodosState {
  todosList: TodoListInterface[];
  selectedTodoId: string;
  isTodosLoading: boolean;
  isCreateModalOpen: boolean;
  isUpdateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isTodoListUpdating: boolean,
}

const initialState: TodosState = {
  todosList: [],
  selectedTodoId: '',
  isTodosLoading: false,
  isCreateModalOpen: false,
  isUpdateModalOpen: false,
  isDeleteModalOpen: false,
  isTodoListUpdating: false
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
    toggleDeleteModal: (state) => {
      state.isDeleteModalOpen = !state.isDeleteModalOpen
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
      state.isTodoListUpdating = true
    })
    addCase(postTodo.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = [...state.todosList, payload.newTodo]
      state.isTodoListUpdating = false
    })
    addCase(postTodo.rejected, (state: TodosState) => {
      state.isTodoListUpdating = false
    })
    addCase(deleteTodo.pending, (state: TodosState) => {
      state.isTodoListUpdating = true
    })
    addCase(deleteTodo.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = state.todosList.filter((t) => t.id !== payload.todoId)
      state.isTodoListUpdating = false
    })
    addCase(deleteTodo.rejected, (state: TodosState) => {
      state.isTodoListUpdating = false
    })
    addCase(updateTodo.pending, (state: TodosState) => {
      state.isTodoListUpdating = true
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
      state.isTodoListUpdating = false
    })
    addCase(updateTodo.rejected, (state: TodosState) => {
      state.isTodoListUpdating = false
    })
  },
})

export const { getSelectedTodoId, toggleCreateTodoModal, toggleUpdateTodoModal, toggleDeleteModal } = todosSlice.actions

export default todosSlice.reducer
