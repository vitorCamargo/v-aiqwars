import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Providers from './providers'
import reportWebVitals from './reportWebVitals'

import './index.less'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
