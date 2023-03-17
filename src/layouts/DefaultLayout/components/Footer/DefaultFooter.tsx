import { Footer } from 'antd/es/layout/layout'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const StyledFooter = styled(Footer)`
  margin-top: 10px;
  background-color: #357534;
`
export const DefaultFooter: FC = (): ReactElement => <StyledFooter>Directed by Robert B. </StyledFooter>
