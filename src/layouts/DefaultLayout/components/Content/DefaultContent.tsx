import { Spin } from 'antd'
import { CreateTodoModal } from 'components/organisms/modals/CreateTodoModal/CreateTodoModal'
import { TodoCard } from 'components/organisms/TodoCard/TodoCard'
import { useAppDispatch, useAppSelector } from 'hooks/app-hooks'
import React, { FC, ReactElement, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Content } from 'antd/es/layout/layout'
import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton'
import { isCreateModalOpen, isTodoListLoading, todoListSelector } from 'store/todoSlice/todo.selectors'
import { getTodos } from 'store/todoSlice/todo.thunks'
import { TodoListInterface } from 'types/types'

const StyledContent = styled(Content)`
  position: relative;
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

const StyledSpin = styled(Spin)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 100;
`

export const DefaultContent: FC = (): ReactElement => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(isTodoListLoading)
  const todosList = useAppSelector(todoListSelector)
  const isModalOpen = useAppSelector(isCreateModalOpen)

  useLayoutEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <StyledContent>
      {isLoading && <StyledSpin tip="Loading" size="large" />}
      <PrimaryButton text="Create new TODO" />
      <CardWrapper>
        {todosList.map((todo: TodoListInterface): ReactElement => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </CardWrapper>
      <CreateTodoModal isOpen={isModalOpen} />
    </StyledContent>
  )
}
