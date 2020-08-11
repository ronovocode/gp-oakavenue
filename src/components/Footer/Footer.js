import React, { Component } from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, Link} from 'react-router-dom';

const Foot = styled.footer`
    width: 100vw;
    background-color: #d2cca1;
    color: #151C0D;
    height: 5rem;
    margin-top: 3rem;
    bottom: 0;
    a {
        color: #151C0D
    }

    a:hover {
        color: #454C3D
    }
`

function Footer(props) {
    return (
        <Foot>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        &#169; 2020 Greenpoint Real Estate
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-4">
                        <Link to="/admin">Admin Login</Link>
                    </div>
                </div>
            </div>
        </Foot>
    )
}

export default Footer;