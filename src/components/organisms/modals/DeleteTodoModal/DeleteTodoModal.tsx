import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { WarningOutlined } from '@ant-design/icons'
import { BasicModal } from 'components/molecules/BasicModal/BasicModal'
import { useAppDispatch, useAppSelector } from 'hooks/app-hooks'
import { isDeleteModalOpen } from 'store/todoSlice/todo.selectors'
import { toggleDeleteModal } from 'store/todoSlice/todo.slice'
import { deleteTodo } from 'store/todoSlice/todo.thunks'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledWarningIcon = styled(WarningOutlined)`
  color: #ce0300;
  font-size: 16px;
  margin-right: 8px;
`

interface DeleteTodoModalProps {
  id: string;
}

export const DeleteTodoModal: FC<DeleteTodoModalProps> = ({ id }): ReactElement => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(isDeleteModalOpen)

  const onOkClick = (): void => {
    dispatch(deleteTodo({ id }))
    dispatch(toggleDeleteModal())
  }

  const onCancelClick = (): void => {
    dispatch(toggleDeleteModal())
  }
  return (
    <BasicModal
      title={
        <HeaderWrapper>
          <StyledWarningIcon />
          Are you sure?
        </HeaderWrapper>
      }
      open={isOpen}
      onOk={onOkClick}
      onCancel={onCancelClick}
      okText="Yes"
      cancelText="No"
      destroyOnClose
    >
      <p>Are you sure that you want to delete this item?</p>
    </BasicModal>
  )
}
