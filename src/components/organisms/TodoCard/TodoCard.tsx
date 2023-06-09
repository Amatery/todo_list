import { DeleteTodoModal } from 'components/organisms/modals/DeleteTodoModal/DeleteTodoModal'
import { UpdateTodoModal } from 'components/organisms/modals/UpdateTodoModal/UpdateTodoModal'
import { useAppDispatch, useAppSelector } from 'hooks/app-hooks'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { parseISO } from 'date-fns'
import { CardMeta } from 'components/atoms/CardMeta/CardMeta'
import {
  selectedTodoId,
  isUpdateModalOpen,
  isTodoListUpdating
} from 'store/todoSlice/todo.selectors'
import { getSelectedTodoId, toggleDeleteModal, toggleUpdateTodoModal } from 'store/todoSlice/todo.slice'
import { deleteTodo, updateTodo } from 'store/todoSlice/todo.thunks'
import { TodoListInterface } from 'types/types'

const StyledCard = styled(Card)`
  width: 350px;
  height: auto;
  margin: 10px 25px;
`

const Status = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 10px 0 10px;
  font-size: 12px;
  color: ${({ color }: any) => {
    return color === 'Completed' ? '#357534' : '#aa0606'
  }};
  font-weight: bold;
`

const StyledDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 10px;
  font-size: 10px;
  color: #a9a9a9ff;
`

export const TodoCard: FC<TodoListInterface> = ({ id, title, description, createdAt, status }): ReactElement => {
  const dispatch = useAppDispatch(deleteTodo)
  const todoId = useAppSelector(selectedTodoId)
  const isModalOpen = useAppSelector(isUpdateModalOpen)
  const parsedDate = parseISO(createdAt).toDateString()
  const isLoading = useAppSelector(isTodoListUpdating)

  const onCheckClick = (): void => {
    dispatch(
      updateTodo({
        id,
        title,
        description,
        status: 'Completed',
      }),
    )
  }

  const onEditClick = (): void => {
    dispatch(getSelectedTodoId({ id }))
    dispatch(toggleUpdateTodoModal())
  }

  const onDeleteClick = (id: string): void => {
    dispatch(getSelectedTodoId({ id }))
    dispatch(toggleDeleteModal())
  }
  return (
    <React.Fragment>
      <StyledCard
        loading={isLoading}
        bordered={false}
        hoverable
        actions={[
          <CheckOutlined key="check" onClick={onCheckClick} />,
          <EditOutlined key="edit" onClick={onEditClick} />,
          <DeleteOutlined key="delete" onClick={() => onDeleteClick(id)} />,
        ]}
      >
        <CardMeta title={title} description={description} />
        <Status color={status}>{status}</Status>
        <StyledDate>Created: {parsedDate}</StyledDate>
      </StyledCard>
      {id === todoId && (
        <>
          <UpdateTodoModal id={id} title={title} description={description} status={status} isOpen={isModalOpen} />
          <DeleteTodoModal id={id} />
        </>
      )}
    </React.Fragment>
  )
}
