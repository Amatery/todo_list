import { CreateTodoModal } from 'components/organisms/CreateTodoModal/CreateTodoModal'
import { TodoCard } from 'components/organisms/TodoCard/TodoCard'
import React, { FC, ReactElement, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Content } from 'antd/es/layout/layout'
import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { isCreateModalOpen, todoListSelector } from 'store/todoSlice/todo.selectors'
import { getTodos } from 'store/todoSlice/todo.thunks'
import { TodoListInterface } from 'types/types'

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

export const DefaultContent: FC = (): ReactElement => {
  const dispatch = useAppDispatch()
  const todosList = useAppSelector(todoListSelector)
  const isModalOpen = useAppSelector(isCreateModalOpen)

  useLayoutEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <StyledContent>
      <PrimaryButton text="Create new TODO" />
      <CardWrapper>
        {todosList.map((todo: TodoListInterface): ReactElement => (
          <React.Fragment key={todo.id}>
            <TodoCard {...todo} />
          </React.Fragment>
        ))}
      </CardWrapper>
      <CreateTodoModal isOpen={isModalOpen} />
    </StyledContent>
  )
}
