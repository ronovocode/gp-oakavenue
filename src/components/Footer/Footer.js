import React, { Component } from 'react'
import styled from 'styled-components'

import { logoutUser } from '../../actions/auth';
import { connect } from "react-redux";

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

    .logout {
        font-weight: lighter;
    }

    .logout:hover {
        cursor: pointer;
    }
`

function Footer(props) {
    return (
        <Foot>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4 text-center">
                        &#169; 2020 Greenpoint Real Estate
                    </div>
                    <div className="col-md-4 mt-4 text-center">
                        <a className="logout" onClick={props.logoutUser}>LOGOUT</a>
                    </div>
                    <div className="col-md-4 mt-4 text-center">
                        <Link to="/admin">Admin Login</Link>
                    </div>
                </div>
            </div>
        </Foot>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps, {
        logoutUser
    }
)(Footer);