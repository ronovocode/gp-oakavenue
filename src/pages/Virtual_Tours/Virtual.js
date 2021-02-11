import React, { Component } from 'react'

import sustainability_bg from '../../static/img/sustainability-bg.jpg';

import styled from 'styled-components';

const Wrapper = styled.div`

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

h1, h2, h3, h4 {
    color: #d2cca1;
}
`

export default class Neighborhood extends Component {

    componentDidMount() {
        document.title = "Sustainability"
    }

    render() {
        return (
            <Wrapper className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>Virtual Tours</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h3>Grande Collection</h3>
                        <div className="iframe-container">
                            <div className="close_virtual_tour">&#215;</div>
                            <iframe title="virtualtour" src="https://my.matterport.com/show/?m=Rpwy8B7C3eJ" frameborder='0' allowfullscreen allow='vr'></iframe>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h3>Vista Collection</h3>
                    <div className="iframe-container">
                        <div className="close_virtual_tour">&#215;</div>
                        <iframe title="virtualtour" src="https://my.matterport.com/show/?m=vQKQZ17hnQp" frameborder='0' allowfullscreen allow='vr'></iframe>
                    </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
