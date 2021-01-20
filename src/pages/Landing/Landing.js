import React, { Component } from 'react'
import styled from 'styled-components'

import kitchen from '../../static/img/kitchen.png';

import Chevron from '../../icons/Chevron';
import { Link } from 'react-router-dom';

const LandingWrapper = styled.div`
    .hero {
        height: 100vh;
        background-image: url(${kitchen});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .hero h1 {
        background-color: transparent;
    }

    .hero-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            h2 {
                font-size: 1.5rem;
            }
        }
    }

    .hero-nav {
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translate(-50%);
        animation: upDownInfinite 3s ease-in-out 1s infinite alternate;

        :hover {
            cursor: pointer;
        }
    }
    
    @keyframes upDownInfinite {
        50% {
            transform: translate(-50%, 1.5rem);
        }
        100% {
            transform: translate(-50%, 0);
        }
    }

    hr {
        border: 1px solid rgba(255,255,255,0.5);
    }

    .carousel {
        max-height: 100%;
        overflow-y: hidden;
    }

    .text-gold {
        color: #D2CCA1;
    }
`

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
        document.title = "Orchard Valley Townhomes"
    }
    // Scroll down with offset for navbar
    scrollDown = () => window.scrollTo(0, this.scrollRef.current.offsetTop - 26);

    onInfoButtonClick = () => {
        window.location.href = "./collections";
    }

    render() {
        return (
            <LandingWrapper>
                    <div className="hero text-center">
                        <div className="hero-text">
                            <h1>Orchard Valley Townhomes</h1>
                            <h2 className="mt-4 font-weight-light">Redwood City, CA</h2>
                            <hr />
                        </div>
                        <div className="hero-nav">
                            <Chevron onClick={this.scrollDown} />
                        </div>
                    </div>
                    <div className="container">
                        <div ref={this.scrollRef} className="row equal-height">
                            <div className="col-md-6 p-5">
                                <h2 className="text-gold">Welcome to Orchard Valley Townhomes,</h2>
                                <span>
                                 your new home in the Bay Area. Orchard Valley is a collection of 14 luxurious townhomes situated among lush greenery in a boutique community. Each of our townhomes offers a warm, modern palette of materials for a contemporary and timeless look. Our interiors are finished with hand selected pieces and fixtures that embody the spirit of a custom residence. Located just a 12 minute walk from downtown Redwood City, Orchard Valley’s living experience is truly one of a kind. 
                                </span>
                            </div>
                            {/* <div className="col-md-6 d-flex align-items-center">
                                <div id="home_carousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={loft} class="img-fluid d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kitchen} class="img-fluid d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kitchen_2} class="img-fluid d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#home_carousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#home_carousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div className="row equal-height">
                            <div className="col-md-6 p-5">
                                <h2 className="text-gold">Collections</h2>
                                <p>Explore our different collections of townhomes to find the one that fits your ​​​​preferences.</p>
                                <Link className="text-gold" to="/collections">Browse collections...</Link>
                            </div>
                            <div className="col-md-6 p-5"></div>
                        </div>
                        <div className="row equal-height">
                            <div className="col-md-6 p-5"></div>
                            <div className="col-md-6 p-5">
                                <h2 className="text-gold">Location/Neighborhood</h2>
                                <p>
                                    Less than a mile away from downtown Redwood City, everything you need is ​​​​within arms reach.
                                </p>
                                <Link className="text-gold" to="/collections">Learn about our neighborhood...</Link>
                            </div>
                        </div>
                        <div className="row equal-height">
                            <div className="col-md-6 p-5">
                                <h2 className="text-gold">Amenities</h2>
                                <p>From luxurious outdoor seating, to cutting edge smart-home technology,
   ​​our homes offer the best amenities to add comfort to your lifestyle.
                                </p>
                                <Link className="text-gold" to="/collections">Browse collections...</Link>
                            </div>
                            <div className="col-md-6 p-5"></div>
                        </div>
                    </div>
            </LandingWrapper>
        )
    }
}
