import { Avatar } from 'antd'
import React, { FC, ReactElement } from 'react'

interface CardAvatarProps {
  src: string;
}

export const CardAvatar: FC<CardAvatarProps> = ({ src }): ReactElement => <Avatar src={src} />
