import { Card } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { CardMeta } from 'components/atoms/CardMeta/CardMeta'
import { useAppDispatch } from 'hooks/hooks'
import React, { FC, ReactElement } from 'react'
import { deleteTodo, updateTodo } from 'store/todoSlice/todo.thunks'
import styled from 'styled-components'
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
  const onCheckClick = (): void => {
    dispatch(
      updateTodo({
        id,
        status: 'Completed',
      }),
    )
  }

  const onEditClick = (): void => {}

  const onDeleteClick = (id: string): void => {
    dispatch(deleteTodo({ id }))
  }
  return (
    <StyledCard
      bordered={false}
      hoverable
      cover={<img alt="TODO cover image" src={`${process.env.REACT_APP_TODO_IMAGE}`} />}
      actions={[
        <CheckOutlined key="check" onClick={onCheckClick} />,
        <EditOutlined key="edit" onClick={onEditClick} />,
        <DeleteOutlined key="delete" onClick={() => onDeleteClick(id)} />,
      ]}
    >
      <CardMeta title={title} description={description} />
      <Status color={status}>{status}</Status>
      <StyledDate>{createdAt}</StyledDate>
    </StyledCard>
  )
}
