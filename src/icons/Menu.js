import React, { Component } from 'react'
import styled from 'styled-components'

const Style = styled.div`
    .a {
        fill: none;
        stroke: #D2CCA1;
        stroke-linecap:round;
        stroke-linejoin:round;
        stroke-width:3px;
    }
`

export default class Menu extends Component {
    render() {
        return (
            <Style>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21">
                    <g transform="translate(-3 -7.5)">
                        <path class="a" d="M4.5,18h27"/>
                        <path class="a" d="M4.5,9h27"/>
                        <path class="a" d="M4.5,27h27"/>
                    </g>
                </svg>
            </Style>
        )
    }
}
