import React, { Component } from 'react'

import neighborhoodImage from '../../static/img/redwoodcitybg.jpg';
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
        width: 100vw;
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
            <Wrapper className="container mb-5">
                <img className="bg" src={neighborhoodImage} alt="redwood city"></img>
                <div class="jumbotron">
                    <h1 class="text-gold display-4">About Redwood City</h1>
                    <p class="lead">Redwood City is a San Francisco Bay Area community located approximately 27 miles south of San Francisco, and 24 miles northwest of San Jose. It sits in the heart of Silicon Valley, the technology-rich region extending from the San Francisco Peninsula to the foothills of the Santa Cruz Mountains.</p>
                    <hr class="my-4"></hr>
                    <p>The city’s vibrant downtown is known as the entertainment hub of the San Francisco Peninsula, and it offers residents a unique entertainment, restaurant, and retail experience. Redwood City is the third largest city in the County of San Mateo, with 85,992 residents. The city enjoys an average of 255 sunny days a year, which it boasts via the city slogan: "Climate Best by Government Test”.</p>
                    <p>Orchard Valley Townhomes is situated a mile away from downtown, bringing you within an arms reach of everything you might need. We have highlighted some important locations for your convenience. </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <iframe title="Map of neighborhood" src="https://www.google.com/maps/d/u/0/embed?mid=1_FlftkUmK6g61a4wyzVKBo6A314CGJj4" width="900" height="600"></iframe>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
