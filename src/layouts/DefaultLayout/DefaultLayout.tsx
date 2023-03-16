import { Layout } from 'antd'
import React, { FC, ReactElement } from 'react'
import { DefaultContent } from './components/Content/DefaultContent'
import { DefaultFooter } from './components/Footer/DefaultFooter'
import { DefaultHeader } from './components/Header/DefaultHeader'

export const DefaultLayout: FC = (): ReactElement => {
  return (
    <Layout>
      <DefaultHeader />
      <DefaultContent />
      <DefaultFooter />
    </Layout>
  )
}
