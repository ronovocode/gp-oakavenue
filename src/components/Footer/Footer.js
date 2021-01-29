import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    width: 100vw;
    background-color: #d2cca1;
    color: #151C0D;
    height: 5rem;
    margin-top: 3rem;
    bottom: 0;
    left: 0;
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
        <Foot className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4 text-center">
                        &#169; 2020 Greenpoint Real Estate
                    </div>
                </div>
            </div>
        </Foot>
    )
}

export default Footer;