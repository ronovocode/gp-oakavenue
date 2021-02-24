import React, { Component } from 'react'

import sustainability_bg from '../../static/img/sustainability-bg.jpg';

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
        opacity: 0.5;
    }

    .text-gold {
        color: #d2cca1;
    }
`

export default class Neighborhood extends Component {

    componentDidMount() {
        document.title = "Sustainability"
    }

    render() {
        return (
            <Wrapper className="container mt-5">
                <img className="bg" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612144559907_park.jpg" alt="redwood city"></img>
                <div class="jumbotron">
                    <h1 class="text-gold display-4">Our sustainability mission</h1>
                    <p class="lead mt-5">We built our townhomes with sustainability in mind, because a greener future is all
                        about holding ourselves accountable. At Orchard Valley Townhomes, we incorporated many different features into
                        our homes to ensure that we respect our local environment, and do a better job of coexisting
                        with nature.</p>
                    <hr class="my-4">
                    </hr>
                    <p>We use a multitude of different methods to keep our power and water usage down inside our homes.
                        The townhomes were constructed with high efficiency plumbing to keep water pressure high with minimal water usage.
                        All appliances are EnergyStar certified for low power consumption. Our walls are painted with Low COV, Greenguard Gold certified, Behr paint 
                        so you can be certain indoor air quality is optimal. Dual pane windows ensure your home is kept well insulated. Our homes 
                        were also constructed with ultra low energy AC units, water heaters, and furnaces. 
                    </p>
                    <p>
                        Our complex is lush with greenery, such as citrus and other fruit trees. We also have a private vegetable
                        and herb garden so you can keep your green thumb active. At Orchard Valley Townhomes, you can be sure that 
                        your lifestyle will be environmentally conscious. 
                    </p>
                    <div className="spacer"></div>
                </div>
            </Wrapper>
        )
    }
}
