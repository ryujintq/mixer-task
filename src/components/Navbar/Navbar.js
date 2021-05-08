import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <h4>My Movies</h4>
            </div>
            <div className="navbar-right">
                <AmplifySignOut />
            </div>
        </div>
    )
}

export default Navbar
