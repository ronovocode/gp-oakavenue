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
        document.title = "About Redwood City"
    }

    render() {
        return (
            <Wrapper className="container">
                <img className="bg" src={sustainability_bg} alt="redwood city"></img>
                <div class="jumbotron">
                    <h1 class="text-gold display-4">Our sustainability mission</h1>
                    <p class="lead">We built our townhomes with sustainability in mind, because a greener future is all
                        about accountability. At Orchard Valley Townhomes, we incorporated many different features into
                        our homes to ensure that we respect our local environment, and do a better job of coexisting
                        with nature.</p>
                    <hr class="my-4">
                    </hr>
                    <p>We use a multitude of different methods to keep our power and water usage down inside our homes.
                        High efficiency plumbing is used to keep water pressure high with minimal water usage.
                        All appliances are EnergyStar rated to keep energy use as low as possible. </p>
                </div>
            </Wrapper>
        )
    }
}
