import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import '~/vendor/semantic/dist/semantic.min.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001' // Не уверен, где стоит размещать подобные конфиги...

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
