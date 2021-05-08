import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SelectedProvider } from './context/SelectedContext'
import { FavouritesProvider } from './context/FavouritesContext'
import { ToWatchProvider } from './context/ToWatchContext'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { OverviewProvider } from './context/OverviewContext'
Amplify.configure(config)

ReactDOM.render(
  <SelectedProvider>
    <FavouritesProvider>
      <ToWatchProvider>
        <OverviewProvider>
          <App />
        </OverviewProvider>
      </ToWatchProvider>
    </FavouritesProvider>
  </SelectedProvider>,
  document.getElementById('root')
)
