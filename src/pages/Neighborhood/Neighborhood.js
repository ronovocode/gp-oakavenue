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
            <Wrapper className="container">
                <img className="bg" src={neighborhoodImage} alt="redwood city"></img>
                <div class="jumbotron">
                    <h1 class="text-gold display-4">About Redwood City</h1>
                    <p class="lead">Redwood City is a San Francisco Bay Area community located approximately 27 miles south of San Francisco, and 24 miles northwest of San Jose. It sits in the heart of Silicon Valley, the technology-rich region extending from the San Francisco Peninsula to the foothills of the Santa Cruz Mountains.</p>
                    <hr class="my-4"></hr>
                    <p>The city’s vibrant downtown is known as the entertainment hub of the San Francisco Peninsula, and it offers residents a unique entertainment, restaurant, and retail experience. Redwood City is the third largest city in the County of San Mateo, with 85,992 residents. The city enjoys an average of 255 sunny days a year, which it boasts via the city slogan: "Climate Best by Government Test”.</p>
                    <p>Orchard Valley Townhomes is situated just </p>
                </div>
                <div className="row">
                    <div className="col">
                        <iframe title="map of neighborhood" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6332.480027669312!2d-122.22823164884785!3d37.478662132833406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa3a42d9560a3%3A0xe0f20d662a34755e!2s301%20Oak%20Ave%2C%20Redwood%20City%2C%20CA%2094061!5e0!3m2!1sen!2sus!4v1611053221913!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                {/* TODO: Dining */}
                {/* TODO: Parks & Trails */}
                {/* TODO: Transit */}
                {/* TODO: Dog Parks */}
            </Wrapper>
        )
    }
}
