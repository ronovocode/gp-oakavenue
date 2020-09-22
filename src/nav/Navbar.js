import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

import GreenpointLogo from "../icons/GreenpointLogo.js"
import Menu from "../icons/Menu.js"

import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
          <Router />
          <Link className="navbar-brand" to="/">
            <GreenpointLogo className="logo"></GreenpointLogo>
            <span className="ml-4">Oak Avenue</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <Menu color="#d21cae" />
            </span>
          </button>
          <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item active">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/homes">Our Homes</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Residents
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/resident/login">Resident Login</Link>
                  <Link className="dropdown-item" to="/resident/dashboard">Dashboard</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/neighborhood">The Neighborhood</Link>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar;