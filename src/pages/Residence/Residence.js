import React, { Component } from 'react'
import styled from 'styled-components';

import Kitchen from '../../static/img/kitchen-zoomed-out.jpg'

import Navbar from '../../nav/301NAV';

const Wrapper = styled.div`
    .res-preview {
        position: relative;
        
        width: 100%;
        transform: translateY(-15%);
    }

    .res-hero {
        height: 75vh;
        overflow: hidden;
        position: relative;
    }

    ul.gallery-filter {
        list-style: none;
    }

    ul.gallery-filter li {
        float: left;
        margin: 10px;
    }
`

class Residence extends Component {
    
    render() {
        return (
            <div>
                <Navbar />  
                <Wrapper>
                    <div className="res-hero">
                        <img className="res-preview" alt="background" src={Kitchen}></img>
                    </div>
                    <div className="container mt-3">
                        <h1 className="res-header">Unit B</h1>
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div className="res-description">
                                    <p></p>
                                    <ul>
                                        <li>2 Bedroom</li>
                                        <li>3 Bathroom</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="text-center">
                            <h3>Gallery</h3>
                            <ul className="gallery-filter mx-auto w-100">
                                <li>All</li>
                                <li>Exterior</li>
                                <li>Interior</li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

Residence.propTypes = {

}

export default Residence