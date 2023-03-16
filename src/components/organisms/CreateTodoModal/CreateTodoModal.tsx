import { Form, Input } from 'antd'
import { BasicModal } from 'components/molecules/BasicModal/BasicModal'
import { useAppDispatch } from 'hooks/hooks'
import React, { FC, ReactElement } from 'react'
import { toggleCreateTodoModal } from 'store/todoSlice/todo.slice'
import { postTodo } from 'store/todoSlice/todo.thunks'
import { CreateTodoInterface } from 'types/types'

interface CreateTodoModalProps {
  isOpen: boolean;
}

export const CreateTodoModal: FC<CreateTodoModalProps> = ({ isOpen }): ReactElement => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const onOk = (): void => {
    form.submit()
    dispatch(toggleCreateTodoModal())
  }

  const onCancel = (): void => {
    dispatch(toggleCreateTodoModal())
  }

  const onFormFinish = ({ title, description }: CreateTodoInterface): void => {
    dispatch(
      postTodo({
        title,
        description,
      }),
    )
    form.resetFields()
  }
  return (
    <BasicModal title="Create new TODO" open={isOpen} onOk={onOk} onCancel={onCancel} destroyOnClose>
      <Form form={form} layout="vertical" onFinish={onFormFinish}>
        <Form.Item name="title" label="What you need TODO?">
          <Input placeholder="Please enter TODO" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input placeholder="Describe yours TODO" />
        </Form.Item>
      </Form>
    </BasicModal>
  )
}
