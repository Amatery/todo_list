import { Dropdown } from 'antd'
import React, { FC, ReactElement } from 'react'

interface CardActionDropDownProps {
  action: string;
  icon: ReactElement;
}

const items = [
  {
    key: '1',
    label: <div>Complete</div>,
  },
  {
    key: '2',
    label: <div>Uncompleted</div>,
  },
  {
    key: '3',
    label: <div>Delete</div>,
  },
]
export const CardActionDropDown: FC<CardActionDropDownProps> = ({ action, icon }): ReactElement => {
  return (
    <Dropdown key={action} menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      {icon}
    </Dropdown>
  )
}
