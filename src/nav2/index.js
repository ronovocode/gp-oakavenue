import React from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components';

import GreenpointLogo from "../icons/GreenpointLogo.js"
import {Link} from "react-router-dom";
import Menu from "../icons/Menu";

const Nav = styled.nav`
    border-bottom: 1px solid rgba(255,255,255,0.3);
    padding-top: 12px;
    padding-bottom: 12px;
    position: sticky;
    background-color: #D2CCA1;
    top: 0;
    z-index: 1000;

    a {
        font-weight: lighter;
        font-size: 1.2rem;
        color: #151C0D;
    }

    .navbar-brand span {
        color: var(--light-accent);
        font-weight: normal;
    }

    .t-brand {
        margin-left: 0.4rem;
    }
    
`

function Navbar(props) {
    return (
        <Nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <Menu color="#d21cae" />
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <Link className="navbar-brand" to="/">
                        <i className="fa fa-tree pr-5" aria-hidden="true"></i>
                        <span className="t-brand">Orchard Valley Townhomes</span>
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collections">Browse Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/amenities">Amenities</Link>
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
                            <Link className="nav-link" to="/virtual_tours">Virtual Tours</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/neighborhood">The Neighborhood</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sustainability">Sustainability</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar
