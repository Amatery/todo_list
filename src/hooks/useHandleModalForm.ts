import { Form, FormInstance } from 'antd'
import { useAppDispatch } from 'hooks/app-hooks'
import { useState } from 'react'
import { toggleCreateTodoModal, toggleUpdateTodoModal } from 'store/todoSlice/todo.slice'
import { postTodo, updateTodo } from 'store/todoSlice/todo.thunks'
import { CreateTodoInterface, UpdateTodoInterface } from 'types/types'

interface useHandleModalInterface {
  onCreateModalCancelClick: () => void
  form: FormInstance<any>;
  onUpdateTodoFormFinish: ({
    title,
    description,
    status
  }: UpdateTodoInterface) => void
  onUpdateModalCancelClick: () => void
  handleFormChange: () => void;
  disableConfirmButton: boolean;
  onCreateTodoFormFinish: ({
    title,
    description
  }: CreateTodoInterface) => void;
  onOkClick: () => void
}

export const useHandleModalForm = (): useHandleModalInterface[] => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const [disableConfirmButton, setDisableConfirmButton] = useState(false)

  const handleFormChange = (): void => {
    const touchedFields = Object.keys(form.getFieldsValue()).filter((el) => form.isFieldTouched(el))
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length)
    if (touchedFields.length >= 2 || hasErrors) {
      setDisableConfirmButton(hasErrors)
    }
  }

  const onCreateTodoFormFinish = ({
    title,
    description
  }: CreateTodoInterface): void => {
    dispatch(
      postTodo({
        title,
        description
      })
    )
    dispatch(toggleCreateTodoModal())
    form.resetFields()
  }

  const onUpdateTodoFormFinish = ({
    title,
    description,
    status
  }: UpdateTodoInterface): void => {
    const id = form.getFieldValue(['id'])
    dispatch(
      updateTodo({
        id,
        title,
        description,
        status
      })
    )
    dispatch(toggleUpdateTodoModal())
    form.resetFields()
  }

  const onOkClick = (): void => {
    form.submit()
  }

  const onCreateModalCancelClick = (): void => {
    dispatch(toggleCreateTodoModal())
    form.resetFields()
  }

  const onUpdateModalCancelClick = (): void => {
    dispatch(toggleUpdateTodoModal())
    form.resetFields()
  }
  return [
    {
      form,
      handleFormChange,
      onCreateTodoFormFinish,
      onUpdateTodoFormFinish,
      onOkClick,
      onCreateModalCancelClick,
      onUpdateModalCancelClick,
      disableConfirmButton
    }
  ]
}
