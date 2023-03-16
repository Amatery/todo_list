import React, { FC, ReactElement } from "react";
import { Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

const StyledHeader = styled(Header)`
  background-color: #357534;
`
const HeaderText = styled.div`
  font-size: 24px;
`
export const DefaultHeader: FC = (): ReactElement => (
  <StyledHeader>
    <HeaderText>TODOApp.</HeaderText>
  </StyledHeader>
)
