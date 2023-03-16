import Meta from 'antd/es/card/Meta'
import { CardAvatar } from 'components/atoms/CardAvatar/CardAvatar'
import React, { FC, ReactElement } from 'react'

interface CardMetaProps {
  title: string;
  description: string;
}

export const CardMeta: FC<CardMetaProps> = ({ title, description }): ReactElement => {
  return (
    <Meta
      avatar={<CardAvatar src={`${process.env.REACT_APP_RANDOM_AVATAR_API}`} />}
      title={title}
      description={description}
    />
  )
}
