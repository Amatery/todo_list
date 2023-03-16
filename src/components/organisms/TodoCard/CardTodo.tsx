import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { TodoListInterface } from 'layouts/DefaultLayout/components/Content/DefaultContent'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { CardActionDropDown } from '../../molecules/CardActionDropDown/CardActionDropDown'

const { Meta } = Card

const StyledCard = styled(Card)`
  width: 350px;
  height: auto;
  margin: 10px 25px;
`

const Status = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 10px 0 10px;
  font-size: 12px;
  color: ${({ status }: any) => {
    return status === 'completed' ? '#357534' : '#aa0606'
  }};
  font-weight: bold;
`

const StyledDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 10px;
  font-size: 10px;
  color: #a9a9a9ff;
`

export const CardTodo: FC<TodoListInterface> = ({ id, title, description, createdAt, status }): ReactElement => {
  return (
    <StyledCard
      key={id}
      bordered={false}
      hoverable
      cover={
        <img
          alt="example"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3YqAKdNlNLWNi3BXItm3QHaD4%26pid%3DApi&f=1&ipt=d3b01ef3390502d5e5d18137babdbf61087cf8b087d7f98b18e784ef5686c85d&ipo=images"
        />
      }
      actions={[
        <EditOutlined key="edit" />,
        <CardActionDropDown key="setting" action="setting" icon={<SettingOutlined />} />,
        <CardActionDropDown key="ellipsis" action="ellipsis" icon={<EllipsisOutlined />} />,
      ]}
    >
      <Meta avatar={<Avatar src="https://joesch.moe/api/v1/random" />} title={title} description={description} />
      <Status>{status}</Status>
      <StyledDate>{createdAt}</StyledDate>
    </StyledCard>
  )
}
