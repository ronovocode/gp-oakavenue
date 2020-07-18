import React, { Component } from 'react';
import styled from 'styled-components';

const Logo = styled.svg`
    fill: #D2CCA1;
`

export default class GreenpointLogo extends Component {
    render() {
        return (
            <Logo xmlns="http://www.w3.org/2000/svg" width="31.456" height="30" viewBox="0 0 31.456 30">
                <path
                    d="M18.485-153.942a7.045,7.045,0,0,1-6.99-7.282c0-3.974,2.934-7.573,6.99-7.573a6,6,0,0,1,4.951,2.33l2.33-2.33a9.186,9.186,0,0,0-7.282-3.2A10.479,10.479,0,0,0,8-161.223a10.234,10.234,0,0,0,10.485,10.485,12.1,12.1,0,0,0,7.573-2.33v-9.612H18.194v3.5h4.369v4.369A7.343,7.343,0,0,1,18.485-153.942Z"
                    transform="translate(-8 172)" />
                <path
                    d="M24.217-159.389h-3.2V-165.8h3.2c2.359,0,3.5,1.261,3.5,3.2S26.576-159.389,24.217-159.389Zm-6.7,10.777h3.5v-7.282h3.5a6.477,6.477,0,0,0,6.7-6.7,6.476,6.476,0,0,0-6.7-6.7h-6.99Z"
                    transform="translate(0.249 178.612)" />
            </Logo>
        )
    }
}

