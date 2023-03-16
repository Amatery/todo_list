import React, { FC, ReactElement } from 'react'
import { Modal } from 'antd'

interface BasicModalProps {
  title: string;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  destroyOnClose: boolean;
  children: ReactElement;
}

export const BasicModal: FC<BasicModalProps> = ({
  title,
  open,
  onOk,
  onCancel,
  destroyOnClose,
  children,
}): ReactElement => {
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel} destroyOnClose={destroyOnClose}>
      {children}
    </Modal>
  )
}
