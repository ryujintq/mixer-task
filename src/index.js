import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SelectedProvider } from './context/SelectedContext'
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <SelectedProvider>
    <App />
  </SelectedProvider>,
  document.getElementById('root')
)
