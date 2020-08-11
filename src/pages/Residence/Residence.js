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
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: "08/12/2020",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Nest Thermostat ", 
                    "Smart lock ", "Smart lighting"],
                Images: [
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
                                <h1>{this.state.Property_Number}</h1>
                                <p className="text-muted">{this.state.Type}</p>
                                <hr />

                                <div className="row mt-5">
                                    <div className="col-md-2 text-center">
                                        <Bed color="#D2CCA1" />
                                        <p className="mt-2">{this.state.Number_of_Bedrooms} bedrooms</p>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <Bath color="#D2CCA1" />
                                        <p className="mt-2">{this.state.Number_of_Bathrooms} bathrooms</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <h3>Amenities</h3>
                                        <ul>
                                            {this.state.Office_Rooms > 0 && <li>Office Room</li>}
                                            {this.state.Powder_Room === "Yes" && <li>Powder Room</li>}
                                            {this.state.Washer_And_Dryer === "Common" ? <li>Common area washer & dryer</li> : <li>In-house washer & dryer</li>}
                                            <li>
                                                Smart Home Features
                                                <ul className="mt-2">
                                                    {this.state.Smart_Home_Features.map(feature => <li>{feature}</li>)}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>Additional Info</h3>
                                        <ul>
                                            {this.state.Facing_Direction && <li>Facing {this.state.Facing_Direction}</li>}
                                            
                                        </ul>
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