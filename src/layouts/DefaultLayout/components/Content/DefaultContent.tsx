import { Content } from 'antd/es/layout/layout'
import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton'
import React, { FC, ReactElement, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store/store'
import { todoListSelector } from 'store/todoSlice/todo.selectors'
import { getTodos } from 'store/todoSlice/todo.thunks'
import styled from 'styled-components'
import { CardTodo } from 'components/organisms/TodoCard/CardTodo'

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export interface TodoListInterface {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  status: string
}

export const DefaultContent: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>()
  const todosList = useSelector(todoListSelector)

  useLayoutEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <StyledContent>
      <PrimaryButton text="Create new TODO" />
      <CardWrapper>
        {todosList.map(({
          id,
          title,
          description,
          createdAt,
          status
        }: TodoListInterface): ReactElement => (
          <React.Fragment key={id}>
            <CardTodo id={id} title={title} description={description} createdAt={createdAt} status={status} />
          </React.Fragment>
        ))}
      </CardWrapper>
    </StyledContent>
  )
}
