import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

import GreenpointLogo from "../../icons/GreenpointLogo.js"

import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
          <Router />
          <Link className="navbar-brand" to="/">
            <GreenpointLogo className="logo"></GreenpointLogo>
            <span className="ml-4">Greenpoint Real Estate</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              
            </span>
          </button>
          <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item active">
                <Link className="nav-link" to="/">About</Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/management">Management</Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/investor/login">Investors</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/learn">Learn</Link>
              </li>
              
            </ul>
          </div>
        </nav>
  )
}

export default Navbar;