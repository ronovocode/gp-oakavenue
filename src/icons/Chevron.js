import React, { Component } from 'react'
import styled from 'styled-components';

const ChevronWrapper = styled.div`
    .a {
        fill: none;
        stroke: #fff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 5px;
    }
`

export default class Chevron extends Component {
    render() {
        return (
            <ChevronWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" width="47.071" height="26.036" viewBox="0 0 47.071 26.036">
                    <path class="a" d="M9,13.5l20,20,20-20" transform="translate(-5.464 -9.964)" />
                </svg>
            </ChevronWrapper>
        )
    }
}