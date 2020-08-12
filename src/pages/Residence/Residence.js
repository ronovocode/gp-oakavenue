import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Kitchen from '../../static/img/kitchen-zoomed-out.jpg'

import Bed from '../../icons/Bed'
import Bath from '../../icons/Bath'
import House from '../../icons/House'
import Calendar from '../../icons/Calendar'
import DollarSign from '../../icons/DollarSign'

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

    .gallery .col-md-2 {
        cursor: pointer;
    }
    
`

class Residence extends Component {
    constructor(props) {
        super(props);

        this.state = {
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 1220,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: "08/19/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Price: 1140,
                Description: "See more...",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/show/?m=vbTzLCM4rtF",
                Smart_Home_Features: ["Nest Thermostat ", 
                "Smart lock ", "Smart lighting"],
                Images: [
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/1-DSC00394.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/2-DSC00395.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/3-DSC00396.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/4-DSC00397.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/5-DSC00398.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/6-DSC00400.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/31-DSC00426.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/32-DSC00427.jpg",
                    "https://greenpointbackend.s3-us-west-1.amazonaws.com/Images/9-DSC00403.jpg"
                ],

                lightboxIsOpen: false,
                lightboxIndex: 0
                
        }
    }

    componentWillMount() {

    }
    
    render() {
        const { lightboxIndex, lightboxIsOpen, Images } = this.state
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
                                    <div className="col-md-2 text-center">
                                        <House color="#D2CCA1" />
                                        <p className="mt-2">{this.state.Square_Footage} sq ft</p>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <Calendar color="#D2CCA1" />
                                        <p className="mt-2">Available starting on {this.state.Available_Date}</p>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <DollarSign color="#D2CCA1" />
                                        <p className="mt-2">${this.state.Price}/mo</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <h3>Amenities</h3>
                                        <ul>
                                            {this.state.Office_Rooms > 0 && <li>Office Room</li>}
                                            {this.state.Powder_Room === "Yes" && <li>Powder Room</li>}
                                            {this.state.Washer_And_Dryer === "Common" ? <li>Common area washer & dryer</li> : <li>In-house washer & dryer</li>}
                                            {this.state.Smart_Home_Features.length > 0 && 
                                                <li>
                                                    Smart Home Features
                                                    <ul className="mt-2">
                                                        {this.state.Smart_Home_Features.map(feature => <li>{feature}</li>)}
                                                    </ul>
                                                </li>
                                            }
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
                        <div className="row">
                            <div className="col text-center">
                                <h3>Take a virtual tour</h3>
                                <hr />
                                <iframe width='900'height='500' src={this.state.Virtual_Tour} frameborder='0' allowfullscreen allow='vr'></iframe>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <h3>Gallery</h3>
                                <hr />
                                <div className="row d-flex gallery">
                                    {this.state.Images && this.state.Images.map((image, index) => {
                                        return (
                                            <div className="col-md-2 p-2" onClick={() => this.setState({ 
                                                    lightboxIsOpen: true, 
                                                    lightboxIndex: index
                                                })}>
                                                <img className="img-fluid" src={image}/>
                                            </div>
                                        )
                                    })}
                                    {lightboxIsOpen && (
                                        <Lightbox
                                            mainSrc={Images[lightboxIndex]}
                                            nextSrc={Images[(lightboxIndex + 1) % Images.length]}
                                            prevSrc={Images[(lightboxIndex + Images.length - 1) % Images.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    lightboxIndex: (lightboxIndex + Images.length - 1) % Images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    lightboxIndex: (lightboxIndex + 1) % Images.length,
                                                })
                                            }
                                        />
                                    )}
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