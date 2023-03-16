import { useAppDispatch } from 'hooks/hooks'
import React, { FC, ReactElement } from 'react'
import { Button } from 'antd'
import { toggleCreateTodoModal } from 'store/todoSlice/todo.slice'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px 25px;
`

interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text }): ReactElement => {
  const dispatch = useAppDispatch()
  const onClick = (): void => {
    dispatch(toggleCreateTodoModal())
  }
  return (
    <Wrapper>
      <Button onClick={onClick} type="primary">
        {text}
      </Button>
    </Wrapper>
  )
}
