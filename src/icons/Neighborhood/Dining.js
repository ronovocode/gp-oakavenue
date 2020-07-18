import React, { Component } from 'react';
import styled from 'styled-components';

const Style = styled.div`
    .a{
        fill:#d2cca1;
    }

    .b,
    .c{
        fill:#151c0d;
    }

    .b{
        stroke:rgba(255,255,255,0.5);
    }

    .c{
        font-size:31px;
        font-family:Europa-Regular;
    }

    .d{
        filter:url(#a);
    }
`

export default class Dining extends Component {
    render() {
        return (
            <Style>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="274" height="306" viewBox="0 0 274 306">
                    <defs>
                        <filter id="a" x="95.682" y="63.322" width="86.8" height="82.325" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="b"/>
                            <feFlood flood-opacity="0.616"/>
                            <feComposite operator="in" in2="b"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g transform="translate(0 -0.285)">
                        <rect class="a" width="274" height="306" transform="translate(0 0.285)"/>
                            <g class="d" transform="matrix(1, 0, 0, 1, 0, 0.29)">
                                <path class="b" d="M23.112,40.177,33.144,30.34,8.258,5.974a13.738,13.738,0,0,0,0,19.673Zm24.036-6.291c5.424,2.468,13.046.73,18.682-4.8C72.6,22.45,73.912,12.926,68.7,7.817c-5.176-5.075-14.889-3.823-21.7,2.815-5.637,5.527-7.409,13-4.892,18.318L7.513,62.874l5,4.9L36.937,43.9,61.327,67.81l5-4.9L41.936,39Z" transform="translate(101.07 65.14)"/>
                            </g>
                            <text class="c" transform="translate(137 225.285)"><tspan x="-42.594" y="0">Dining</tspan></text>
                    </g>
                </svg>
            </Style>
        )
    }
}
