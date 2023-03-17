import { Form, Input, Select } from 'antd'
import { BasicModal } from 'components/molecules/BasicModal/BasicModal'
import { useAppDispatch } from 'hooks/hooks'
import React, { FC, ReactElement } from 'react'
import { toggleUpdateTodoModal } from 'store/todoSlice/todo.slice'
import { updateTodo } from 'store/todoSlice/todo.thunks'
import { UpdateTodoInterface } from 'types/types'

interface UpdateTodoModalProps {
  id: string
  title: string
  description: string
  status: string
  isOpen: boolean
}

export const UpdateTodoModal: FC<UpdateTodoModalProps> = ({
  id,
  title,
  description,
  status,
  isOpen
}): ReactElement => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const onOk = (): void => {
    form.submit()
    dispatch(toggleUpdateTodoModal())
  }

  const onCancel = (): void => {
    dispatch(toggleUpdateTodoModal())
  }

  const onFormFinish = ({
    title,
    description,
    status
  }: UpdateTodoInterface): void => {
    dispatch(
      updateTodo({
        id,
        title,
        description,
        status
      })
    )
    form.resetFields()
  }
  return (
    <BasicModal title="Edit TODO" open={isOpen} onOk={onOk} onCancel={onCancel} destroyOnClose>
      <Form form={form} layout="vertical" onFinish={onFormFinish}>
        <Form.Item name="title" label="What you need TODO?" initialValue={title}>
          <Input placeholder="Please enter TODO" />
        </Form.Item>
        <Form.Item name="description" label="Description" initialValue={description}>
          <Input placeholder="Describe yours TODO" />
        </Form.Item>
        <Form.Item name="status" label="Status" initialValue={status}>
          <Select
            options={[
              {
                value: 'Completed',
                label: 'Completed'
              },
              {
                value: 'Uncompleted',
                label: 'Uncompleted'
              }
            ]}
          />
        </Form.Item>
      </Form>
    </BasicModal>
  )
}
