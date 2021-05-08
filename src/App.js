import { useContext, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { SelectedContext } from './context/SelectedContext'
import Search from './pages/Search/Search'
import Favourites from './pages/Favourites/Favourites'
import ToWatch from './pages/ToWatch/ToWatch'
import './App.css'

const App = () => {
  const [selected] = useContext(SelectedContext)
  const pages = { Search, Favourites, ToWatch } //for dynamic page switching
  const Component = pages[selected] // get correct component to load 

  useEffect(() => {
    const checkUser = async () => {
      let user = await Auth.currentAuthenticatedUser();
      alert(user.username)
    }
    checkUser()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Component />
      </div>
    </div>
  )
}

export default withAuthenticator(App)