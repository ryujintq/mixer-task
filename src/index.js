import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SelectedProvider } from './context/SelectedContext'
import { FavouritesProvider } from './context/FavouritesContext'
import { ListIdProvider } from './context/ListId'
import { ToWatchProvider } from './context/ToWatchContext'
import { OverviewProvider } from './context/OverviewContext'
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <ListIdProvider>
    <FavouritesProvider>
      <ToWatchProvider>
        <SelectedProvider>
          <OverviewProvider>
            <App />
          </OverviewProvider>
        </SelectedProvider>
      </ToWatchProvider>
    </FavouritesProvider>
  </ListIdProvider>,
  document.getElementById('root')
)
