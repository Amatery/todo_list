import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ConfigProvider theme={{
    token: {
      colorPrimary: '#357534',
      fontFamily: 'Maven Pro, sans-serif'
    }
  }}>
    <App />
  </ConfigProvider>
)
