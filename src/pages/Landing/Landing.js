import React, { Component } from 'react'
import styled from 'styled-components'

import kitchen from '../../static/img/kitchen.png';
import kitchen_2 from '../../static/img/kitchen-zoomed-out.jpg';
import loft from '../../static/img/loft.jpg';

import Chevron from '../../icons/Chevron';

import Navbar from '../../nav/301NAV';

const LandingWrapper = styled.div`
    .hero {
        height: 100vh;
        background-image: url(${kitchen});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .hero .bg {
        height: 100vh;
        width: 100%;
        position: absolute;
        left: 0;
        opacity: 0.5;
        z-index: 0;
    }

    .hero h1 {
        background-color: transparent;
    }

    .hero-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .hero-nav {
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translate(-50%);
        animation: upDownInfinite 3s ease-in-out 1s infinite alternate;
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
`

export default class Landing extends Component {

    componentDidMount() {
        document.title = "301 Oak Avenue"
    }

    render() {
        return (
            <div>
                <Navbar />
                <LandingWrapper>
                    <div className="container-fluid">
                        <div className="hero text-center">
                            <div className="hero-text">
                                <h1>301 Oak Avenue</h1>
                                <h2 className="mt-4">Redwood City, CA</h2>
                                <hr />
                            </div>
                            <div className="hero-nav">
                                <Chevron />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 p-5">
                                    <h2>Overview</h2>
                                    <hr />
                                    <p>
                                        Nulla a eleifend nibh, et pellentesque libero. Vestibulum tortor mi, iaculis at orci a, euismod efficitur ante. Pellentesque condimentum tellus nec nisl maximus, vitae placerat quam sollicitudin. Mauris vel maximus augue, consectetur malesuada dolor. Vestibulum eu diam elit. Donec ut arcu ligula. Quisque vitae consectetur lacus. Sed laoreet dolor mi.
                                        Etiam feugiat elementum orci. Ut quis vulputate lorem, non eleifend massa. Ut quis enim scelerisque, pellentesque mauris a, placerat quam. Nullam at consequat neque. Aliquam eu dignissim nisl. Phasellus laoreet viverra hendrerit. Duis viverra, nisl et fermentum volutpat, erat magna bibendum nisl, et posuere tellus odio eget sem. Aliquam sagittis augue eget elit mattis varius. Sed at porta sem. In vestibulum fringilla leo nec tempor. Sed vestibulum pellentesque tempor. Aliquam tempus tincidunt tincidunt. Donec aliquet arcu nec ullamcorper sagittis. Aenean ut laoreet dui.
                                        Integer suscipit dui in enim volutpat, maximus euismod arcu dignissim. 
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
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
                        </div>
                    </div>
                </LandingWrapper>
            </div>
        )
    }
}
