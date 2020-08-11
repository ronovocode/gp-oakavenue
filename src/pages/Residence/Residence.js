import React, { Component } from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, useParams } from 'react-router-dom';

import Kitchen from '../../static/img/kitchen-zoomed-out.jpg'

import Bed from '../../icons/Bed'
import Bath from '../../icons/Bath'

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

    h1, h2, h3, h4, h5 {
        color: #d2cca1
    }

    hr {
        background-color: #D2CCA1
    }
    
`

class Residence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: "101",
            numberOfBeds: 2,
            numberOfBaths: 3,
            pricePerMonth: 1400,
            images: [
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/random"
            ]
        }
    }

    componentWillMount() {

    }
    
    render() {
        return (
                <Wrapper>
                    <div className="res-hero">
                        <img className="res-preview" alt="background" src={Kitchen}></img>
                    </div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col apartment-info">
                                <h1>{this.state.unit}</h1>
                                <hr />

                                <div className="row mt-5">
                                    <div className="col-md-2 text-center">
                                        <Bed color="#D2CCA1" />
                                        <p className="mt-2">{this.state.numberOfBeds} bedrooms</p>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <Bath color="#D2CCA1" />
                                        <p className="mt-2">{this.state.numberOfBaths} bathrooms</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <h3>Additional Amenities</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Wrapper>
        )
    }
}

Residence.propTypes = {

}

export default Residence