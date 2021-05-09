import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SelectedProvider } from './context/SelectedContext'
import { ListIdProvider } from './context/ListId'
import { OverviewProvider } from './context/OverviewContext'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { FavouritesProvider } from './context/FavouritesContext'
import { ToWatchProvider } from './context/ToWatchContext'
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
