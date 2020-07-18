import React, { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    .a {
        fill:none;
        stroke-linecap:round;
        stroke-linejoin:round;
        stroke-width:2px;
    }
`

export default class Mail extends Component {
    render() {
        return (
        <SVG xmlns="http://www.w3.org/2000/svg" width="21.535" height="17" viewBox="0 0 21.535 17">
            <g transform="translate(-1.607 -5)">
                <path class="a" d="M4.875,6h15A1.881,1.881,0,0,1,21.75,7.875v11.25A1.881,1.881,0,0,1,19.875,21h-15A1.881,1.881,0,0,1,3,19.125V7.875A1.881,1.881,0,0,1,4.875,6Z"/>
                <path class="a" d="M21.75,9l-9.375,6.563L3,9" transform="translate(0 -1.125)"/>
            </g>
        </SVG>       )
    }
}

