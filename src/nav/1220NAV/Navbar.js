import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/* Page Imports */
import Our_Homes from '../../pages/1220ECR/Our_Homes/Our_Homes.js';

import GreenpointLogo from "../../icons/GreenpointLogo.js"

import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/1220ECR/Landing">
            <GreenpointLogo className="logo"></GreenpointLogo>
            <span className="ml-4">1220 El Camino Real</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item active">
                <Link className="nav-link" to="/1220ECR/Landing">About</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Homes
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/1220ECR/Our_Homes">Apartments</Link>
                  <Link className="dropdown-item" to="/1220ECR/Our_Homes">Amenities</Link>
                  <Link className="dropdown-item" to="/1220ECR/Our_Homes">Browse Availability</Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Residents
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="#">Resident Application</Link>
                  <Link className="dropdown-item" to="#">Resident Login</Link>
                  <Link className="dropdown-item" to="#">Dashboard</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/1220ECR/Neighborhood">The Neighborhood</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/1220ECR/Testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar;