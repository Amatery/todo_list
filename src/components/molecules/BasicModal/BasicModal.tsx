import React, { FC, ReactElement } from 'react'
import { Modal } from 'antd'

interface BasicModalProps {
  title: string | ReactElement;
  open: boolean;
  onOk: any;
  onCancel: any;
  destroyOnClose: boolean;
  children: ReactElement;
  okText?: string;
  cancelText?: string;
  okButtonProps?: {
    disabled: boolean,
  };
}

export const BasicModal: FC<BasicModalProps> = ({
  title,
  open,
  onOk,
  onCancel,
  destroyOnClose,
  children,
  okText = 'OK',
  cancelText = 'Cancel',
  okButtonProps = {
    disabled: false,
  },
}): ReactElement => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      destroyOnClose={destroyOnClose}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={okButtonProps}
    >
      {children}
    </Modal>
  )
}
