import React, { Component } from 'react'
import styled from 'styled-components'

import kitchen from '../../static/img/kitchen.png';

import Chevron from '../../icons/Chevron';
import { Link } from 'react-router-dom';

import {Fade} from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

const LandingWrapper = styled.div`
    .hero {
        height: 100vh;
        background-image: url("https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873394428_K1000248.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        opacity: 0.7;
    }

    .hero h1 {
        background-color: transparent;
    }

    .hero-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
        h1 {
            color: #fff
        }

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
        bottom: 25rem;
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

const LandingCard = (props) => {
    const Wrap = styled.div`
        height: 50vh;
        position: relative;

        margin-bottom: 2rem;

        @media only screen and (max-width: 768px) {
            height: 75vh;
        }

        .image-wrapper {
            position: relative;
            height: 80%;
            overflow: hidden;

            img {
                position: absolute;
                top: ${props.offset};
                width: 100%;
    
                @media only screen and (max-width: 768px) {
                    top: 0;
                    height: 100%;
                    width: auto;
                }
            }

            h2 {
                position: absolute;
                bottom: -1rem;
                left: 5rem;
                padding: 0.5rem 1rem 0.5rem 1rem;
    
                background-color: var(--dark);
                color: var(--gold);
            }
        }

        p {
            width: 75vw;
            margin: 0 auto;

            @media only screen and (max-width: 768px) {
                width: 90vw;
            }
        }
    `

    return(
        <Wrap {...props}>
            <div className="image-wrapper">
                <Pulse>
                    <img src={props.src}></img>
                </Pulse>
                <h2>{props.title}</h2>
            </div>
            <Fade bottom>
                <p className="mt-5">
                    {props.children}
                </p>
            </Fade>
        </Wrap>
    )

}

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
                <div id="home_carousel" class="carousel" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663562772_K1000614-HDR-2.jpg"/>
                        </div>
                        <div class="carousel-item">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663598034_K1000889.jpg"/>
                        </div>
                        <div class="carousel-item">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663645768_K1000986.jpg"/>
                        </div>
                        <div class="carousel-item">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663681268_K1000962.jpg"/>
                        </div>
                        <div class="carousel-item">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663706240_K1000636.jpg"/>
                        </div>
                        <div class="carousel-item">
                            <img alt="house" class="img-fluid d-block w-100" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612663739824_K1000776-HDR.jpg"/>
                        </div>
                    </div>
                    <div className="hero-nav">
                        <Chevron onClick={this.scrollDown} />
                    </div>
                </div>

                <div className="container my-5">
                    <h2 className="text-gold">Welcome to Orchard Valley Townhomes,</h2>
                    <span>
                        your new home in the Bay Area. Orchard Valley is a collection of 14 luxurious townhomes situated among lush greenery in a boutique community. Each of our townhomes offers a warm, modern palette of materials for a contemporary and timeless look. Our interiors are finished with hand selected pieces and fixtures that embody the spirit of a custom residence. Located just a 12 minute walk from downtown Redwood City, Orchard Valley’s living experience is truly one of a kind. 
                    </span>
                </div>

                <LandingCard title="Townhomes" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612140944413_K1000819.jpg" offset="-70%">
                    <p>Explore our different collections of townhomes to find the one that fits your ​​​​preferences.</p>
                    <Link className="text-gold" to="/collections">Browse collections...</Link>
                </LandingCard>
                <LandingCard className="mt-5" title="Amenities" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612144661581_K1000100.jpg" offset="-70%">
                                <p>From luxurious outdoor seating, to cutting edge smart-home technology,
                                    ​​our homes offer the best amenities to add comfort to your lifestyle.
                                </p>
                                <Link className="text-gold" to="/collections">Browse collections...</Link>
                </LandingCard>
                <LandingCard className="mt-5" title="Neighborhood" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1613600004801_lifestyle.jpg" offset="-50%">
                                <p>
                                    Less than a mile away from downtown Redwood City, everything you need is ​​​​within arms reach.
                                </p>
                                <Link className="text-gold" to="/collections">Learn about our neighborhood...</Link>
                </LandingCard>

                    {/* 
                    {/* <div className="hero text-center">
                        <div className="hero-text">
                            <h1>Orchard Valley Townhomes</h1>
                            <h2 className="mt-4 font-weight-light">14 Luxury Townhomes situated in the heart of Silicon Valley</h2> 
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
                            </div> 
                        </div>
                        <div className="row equal-height">
                            <div className="col-md-6 p-5">
                                <h2 className="text-gold">Collections</h2>
                                <p>Explore our different collections of townhomes to find the one that fits your ​​​​preferences.</p>
                                <Link className="text-gold" to="/collections">Browse collections...</Link>
                            </div>
                            <div className="col-md-6 p-5">
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612140944413_K1000819.jpg"></img>
                            </div>
                        </div>
                        <div className="row equal-height">
                            <div className="col-md-6 p-5">
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612144559907_park.jpg"></img>
                            </div>
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
                            <div className="col-md-6 p-5">
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612144661581_K1000100.jpg"></img>
                            </div>
                        </div>
                    </div> */}
            </LandingWrapper>
        )
    }
}
