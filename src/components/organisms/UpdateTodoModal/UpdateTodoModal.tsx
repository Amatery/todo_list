import { Form, Input, Select } from 'antd'
import { BasicModal } from 'components/molecules/BasicModal/BasicModal'
import { useHandleModalForm } from 'hooks/useHandleModalForm'
import React, { FC, ReactElement } from 'react'

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

  const [
    {
      form,
      handleFormChange,
      onUpdateTodoFormFinish,
      onOkClick,
      onUpdateModalCancelClick
    }
  ] = useHandleModalForm()

  return (
    <BasicModal
      title="Edit TODO"
      open={isOpen}
      onOk={onOkClick}
      onCancel={onUpdateModalCancelClick}
      okText="Update TODO"
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={onUpdateTodoFormFinish} onValuesChange={handleFormChange}
            initialValues={{ id }}>
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
