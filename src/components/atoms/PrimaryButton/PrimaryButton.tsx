import React, { FC, ReactElement } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px 25px;
`

interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text }): ReactElement => {
  return (
    <Wrapper>
      <Button type="primary">{text}</Button>
    </Wrapper>
  )
}
