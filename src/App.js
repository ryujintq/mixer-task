import { useContext, useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { SelectedContext } from './context/SelectedContext'
import Search from './pages/Search/Search'
import Favourites from './pages/Favourites/Favourites'
import ToWatch from './pages/ToWatch/ToWatch'
import { OverviewContext } from './context/OverviewContext'
import Overview from './pages/Overview/Overview'
import { createList, getList } from './api/graphql'
import { ListIdContext } from './context/ListId'
import { FavouritesContext } from './context/FavouritesContext'
import { ToWatchContext } from './context/ToWatchContext'
import './App.css'

const App = () => {
  const [selected] = useContext(SelectedContext)
  const [favourites, setFavourites] = useContext(FavouritesContext)
  const [toWatch, setToWatch] = useContext(ToWatchContext)
  const [listId] = useContext(ListIdContext)
  const [overview] = useContext(OverviewContext)
  const pages = { Search, Favourites, ToWatch } //for dynamic page switching
  const Page = pages[selected] // get correct page to load 

  //if list exists, set favourites and to watch
  //if it does not, create a new list
  useEffect(() => {
    if (!listId) {
      const createListAsync = async () => {
        await createList()
      }
      return createListAsync()
    }

    const getListAsync = async () => {
      await getList()
    }
    getListAsync()
    // setFavourites(response.favourites)
    // setToWatch(response.toWatch)
  }, [listId, setFavourites, setToWatch])

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        {overview ? <Overview /> : (
          <>
            <Sidebar />
            <Page />
          </>
        )}
      </div>
    </div>
  )
}

export default withAuthenticator(App)
