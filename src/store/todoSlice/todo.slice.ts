import { createSlice } from '@reduxjs/toolkit'
import { getTodos } from 'store/todoSlice/todo.thunks'

export interface TodosState {
  todosList: [];
  isEditMode: boolean;
  isTodosLoading: boolean;
}

const initialState: TodosState = {
  todosList: [],
  isEditMode: false,
  isTodosLoading: false,
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.isEditMode = !state.isEditMode
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state: TodosState) => {
      state.isTodosLoading = true
    })
    builder.addCase(getTodos.fulfilled, (state: TodosState, { payload }) => {
      state.todosList = payload.todos
      state.isTodosLoading = false
    })
    builder.addCase(getTodos.rejected, (state: TodosState) => {
      state.isTodosLoading = false
    })
  },
  // extraReducers: {
  //   [getTodos.pending.type]: (state: any) => {
  //     state.isTodosLoading = true
  //   },
  //   [getTodos.fulfilled.type]: (state: any, { payload }: any) => {
  //     state.todosList = payload.todosList
  //   },
  //   [getTodos.rejected.type]: (state: any) => {
  //     state.isTodosLoading = false
  //   },
  // },
})

export const { toggleEditMode } = todosSlice.actions

export default todosSlice.reducer
