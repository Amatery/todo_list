import { Form, Input } from 'antd'
import { BasicModal } from 'components/molecules/BasicModal/BasicModal'
import { descriptionInputRules, titleInputRules } from 'helpers/input-rules'
import { useHandleModalForm } from 'hooks/useHandleModalForm'
import React, { FC, ReactElement } from 'react'

interface CreateTodoModalProps {
  isOpen: boolean;
}

export const CreateTodoModal: FC<CreateTodoModalProps> = ({ isOpen }): ReactElement => {
  const [
    { form, handleFormChange, onCreateTodoFormFinish, onOkClick, onCreateModalCancelClick, disableConfirmButton },
  ] = useHandleModalForm()

  return (
    <BasicModal
      title="Create new TODO"
      open={isOpen}
      onOk={onOkClick}
      onCancel={onCreateModalCancelClick}
      okText="Create TODO"
      okButtonProps={{ disabled: disableConfirmButton }}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={onCreateTodoFormFinish} onFieldsChange={handleFormChange}>
        <Form.Item name="title" label="What you need TODO?" rules={titleInputRules}>
          <Input placeholder="Please enter TODO" />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={descriptionInputRules}>
          <Input placeholder="Describe yours TODO" />
        </Form.Item>
      </Form>
    </BasicModal>
  )
}
