import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><Link to="/"  >Home</Link></li>
            <li><Link to="/About"  >About</Link></li>
            <li><Link to="/Policy"  >Policy</Link></li>

        </ul>
    

    </div>
  )
}

export default navbar