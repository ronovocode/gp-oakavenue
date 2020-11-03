import React, { Component } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Static Images
import Kitchen from '../../static/img/kitchen-zoomed-out.jpg'

// Icons
import Bed from '../../icons/Residence/Bed'
import Bath from '../../icons/Residence/Bath'
import House from '../../icons/Residence/House'
import Calendar from '../../icons/Residence/Calendar'
import DollarSign from '../../icons/Residence/DollarSign'
import Office from '../../icons/Residence/Office'
import SmartHome from '../../icons/Residence/SmartHome'
import Washer from '../../icons/Residence/Washer'
import Compass from '../../icons/Residence/Compass'
import Magnifying from '../../icons/Residence/Magnifying'
import Fire from '../../icons/Residence/Fire'
import Patio from '../../icons/Residence/Patio'

import API from '../../utils/API'
import apartments from '../../static/data';

// 3D Plans
import plan_293A from '../../static/img/PLAN3D/293A.png';
import plan_293D from '../../static/img/PLAN3D/293D.png';
import plan_297D from '../../static/img/PLAN3D/297D.png';
import plan_301A from '../../static/img/PLAN3D/301A.png';
import plan_301B301D297C293B from '../../static/img/PLAN3D/301B301D297C293B.png';
import plan_301C301E297B293C from '../../static/img/PLAN3D/301C301E297B293C.png';
import plan_301F297A from '../../static/img/PLAN3D/301F297A.png';

// Need to make alias for each plan so that the page populates the appropriate one 
const plan3ds = {
    "293A.png": plan_293A,
    "293D.png": plan_293D,
    "297D.png": plan_297D,
    "301A.png": plan_301A,
    "301B301D297C293B.png": plan_301B301D297C293B,
    "301C301E297B293C.png": plan_301C301E297B293C,
    "301F297A.png": plan_301F297A
}

const Wrapper = styled.div`
    .res-hero {
        position: relative;
        height: 50vw;
        min-width: 100vw;
        background-image: url(${Kitchen});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    h1, h2, h3, h4, h5 {
        color: #d2cca1
    }

    hr {
        background-color: #D2CCA1
    }

    .gallery {
        max-height: 9%;
        overflow: hidden;
    }

    .gallery .col-md-2 {
        cursor: pointer;
    }

    .zoom {
        position: absolute;
        left: 5%;
        bottom: 6%;
        transition: 0.3s
    }
    @media only screen and (max-width: 600px) {
        .zoom {
            width: 1rem;
        }
      }

    .zoom:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
    .iframe-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
      
    .iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .gallery .wrapper {
        flex: 0 0 auto;
    }

    .gallery .img-fluid {
        max-height: 110px;
        background-color: rgba(255,255,255,0.2);
        padding: 0.5rem;
        cursor: pointer;
    }

    .gallery {
        display: flex;
        flex-wrap: nowrap; 
        overflow: auto;
    }
    
`

class Residence extends Component {
    constructor(props) {
        super(props);

        this.state = {
                lightboxIsOpen: false,
                lightboxIndex: 0,
                virtual_tour_fullscreen: false,
                images: [],
                unit: {}
        }
    }

    componentDidMount() {
        let unit_number = window.location.href.split("/")
        unit_number = unit_number[unit_number.length - 1]

        let currentUnit = apartments.filter(apartment => apartment.unit === unit_number)[0]
        
        this.setState({
            unit: currentUnit
        })

        console.log(unit_number);
        API.GET_ONE_APARTMENT(unit_number).then(res => {

            if(res.data.images) {
                this.setState({
                    images: res.data.images
                });
            }
            if(res.data.available_date) {
                this.setState({
                    available_date: res.data.available_date
                })
            }

            if(res.data.price) {
                this.setState({
                    price: res.data.price
                })
            }
        })
    }
    
    render() {
        const { lightboxIndex, lightboxIsOpen, images, unit, available_date } = this.state
        return (
                <Wrapper>
                    <div className="res-hero">
                        
                        <Magnifying className="zoom" color="#151C0D" onClick={() => this.setState({ 
                                                    lightboxIsOpen: true, 
                                                    lightboxIndex: 0
                                                })} />
                    </div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col apartment-info mt-3">
                                <div className="gallery">
                                    {images && images.map((image, index) => {
                                        return (
                                            <div className="wrapper p-2" onClick={() => this.setState({ 
                                                    lightboxIsOpen: true, 
                                                    lightboxIndex: index
                                                })}>
                                                <img alt={index + "img"} className="img-fluid" src={image}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h1 className="mt-4">{unit.unit}</h1>
                                <p className="text-muted">{unit.type}</p>
                                <div className="row">
                                    <div className="col">
                                        <img alt={unit.PLAN3D} className="img-fluid" src={plan3ds[unit.PLAN3D]}></img>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col info">
                                        <h4>Apartment Info</h4>
                                        <hr />
                                        <div className="row pt-3">
                                            {unit.number_of_bedrooms && 
                                                <div className="col-md-2 text-center">
                                                    <Bed color="#D2CCA1" />
                                                    <p className="mt-2">{unit.number_of_bedrooms} bedrooms</p>
                                                </div>
                                            }
                                            {unit.number_of_bathrooms && 
                                                <div className="col-md-2 text-center">
                                                    <Bath color="#D2CCA1" />
                                                    <p className="mt-2">{unit.number_of_bathrooms} bathrooms</p>
                                                </div>
                                            }
                                            {unit.square_footage && 
                                                <div className="col-md-2 text-center">
                                                    <House color="#D2CCA1" />
                                                    <p className="mt-2">{unit.square_footage} sq ft</p>
                                                </div>
                                            }
                                            {available_date && 
                                                <div className="col-md-2 text-center">
                                                    <Calendar color="#D2CCA1" />
                                                    <p className="mt-2">Available starting on {available_date}</p>
                                                </div>
                                            }
                                            {this.state.price && 
                                                <div className="col-md-2 text-center">
                                                    <DollarSign color="#D2CCA1" />
                                                    <p className="mt-2">${this.state.price}/mo</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col amenities">
                                        <h4>Amenities</h4>
                                        <hr />
                                        <div className="row pt-3">
                                            {unit.office_rooms && 
                                                <div className="col-md-2 text-center">
                                                    <Office color="#D2CCA1" />
                                                    <p className="mt-2">{unit.office_rooms}</p>
                                                </div>
                                            }
                                            {unit.smart_home_features && unit.smart_home_features.length && <div className="col-md-2 text-center">
                                                <SmartHome color="#D2CCA1" />
                                                
                                                    <div className="mt-2">
                                                        Smart Home
                                                        <div className="mt-2 text-muted">
                                                            {unit.smart_home_features.map(feature => <p>{feature}</p>)}
                                                        </div>
                                                    </div>
                                                
                                            </div>}
                                            {unit.washer_and_dryer && <div className="col-md-2 text-center">
                                                <Washer color="#D2CCA1" />
                                                {unit.washer_and_dryer === "Common" ? <p className="mt-2">Common washer & dryer</p> : <p className="mt-2">In-unit washer & dryer</p>}
                                            </div>}
                                            {unit.window_directions && 
                                                <div className="col-md-2 text-center">
                                                    <Compass color="#D2CCA1" />
                                                    <p className="mt-2">Facing {unit.window_directions}</p>
                                                </div>
                                            }
                                            {unit.fireplace === "Yes" && 
                                                <div className="col-md-2 text-center">
                                                    <Fire color="#D2CCA1" />
                                                    <p className="mt-2">Fireplace</p>
                                                </div>
                                            }
                                            {unit.patios && 
                                                <div className="col-md-2 text-center">
                                                    <Patio color="#D2CCA1" />
                                                    <p className="mt-2">Patios</p>
                                                    <p className="mt-1 text-muted">{unit.patios}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {unit.virtual_tour && 
                        <div className="row">
                            <div className="col text-center">
                                <h3>Take a virtual tour</h3>
                                {/* <p onClick={() => this.setState({virtual_tour_fullscreen: true})} className="text-muted">Tap here for fullscreen</p> */}
                                <hr />
                                <div className="iframe-container">
                                    {this.state.virtual_tour_fullscreen&& <div className="close_virtual_tour">&#215;</div>}
                                    <iframe title="virtualtour" src={unit.virtual_tour} frameborder='0' allowfullscreen allow='vr'></iframe>
                                </div>
                            </div>
                        </div>}
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="row d-flex gallery">
                                    {lightboxIsOpen && (
                                        <Lightbox
                                            mainSrc={images[lightboxIndex]}
                                            nextSrc={images[(lightboxIndex + 1) % images.length]}
                                            prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
                                            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    lightboxIndex: (lightboxIndex + images.length - 1) % images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    lightboxIndex: (lightboxIndex + 1) % images.length,
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