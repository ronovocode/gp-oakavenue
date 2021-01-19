import React, { Component } from 'react'

import neighborhoodImage from '../../static/img/redwoodcitybg.jpg';

import Shopping from '../../icons/Neighborhood/Shopping';
import Dining from '../../icons/Neighborhood/Dining';
import Schools from '../../icons/Neighborhood/Schools';
import ParkTrail from '../../icons/Neighborhood/ParkTrail';
import styled from 'styled-components';

const Wrapper = styled.div`

    .jumbotron {
        background-color: transparent;
    }

    .bg {
        position: fixed;
        z-index: -500;
        top: 0;
        left: 0;
        height: 100vh;
    }

    .text-gold {
        color: #d2cca1;
    }
`

export default class Neighborhood extends Component {

    componentDidMount() {
        document.title = "About Redwood City"
    }

    render() {
        return (
            <Wrapper className="container">
                <img className="bg" src={neighborhoodImage}></img>
                <div class="jumbotron">
                    <h1 class="text-gold display-4">About Redwood City</h1>
                    <p class="lead">Redwood City is a San Francisco Bay Area community located approximately 27 miles south of San Francisco, and 24 miles northwest of San Jose. It sits in the heart of Silicon Valley, the technology-rich region extending from the San Francisco Peninsula to the foothills of the Santa Cruz Mountains.</p>
                    <hr class="my-4"></hr>
                    <p>The city’s vibrant downtown is known as the entertainment hub of the San Francisco Peninsula, and it offers residents a unique entertainment, restaurant, and retail experience. Redwood City is the third largest city in the County of San Mateo, with 85,992 residents. The city enjoys an average of 255 sunny days a year, which it boasts via the city slogan: "Climate Best by Government Test”.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </Wrapper>
        )
    }
}
