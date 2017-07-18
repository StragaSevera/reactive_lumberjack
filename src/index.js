import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import '~/vendor/semantic/dist/semantic.min.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootElement
    )
  })
}
