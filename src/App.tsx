import React, { type ReactElement } from 'react'
import { Provider } from 'react-redux'
import { DefaultLayout } from 'layouts/DefaultLayout/DefaultLayout'
import { store } from 'store/store'

function App(): ReactElement {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  )
}

export default App
