import React from 'react'
import navLogo from '../assets/navLogo.png'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav id='nav-bar'>
            <Link to="/"><img src={navLogo} alt="nav-logo" height={40}/></Link>
        </nav>
    </div>
  )
}

export default Navbar