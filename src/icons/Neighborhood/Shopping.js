import React, { Component } from 'react'
import styled from 'styled-components';

const Style = styled.div`
    .cls-1 {
        fill: #d2cca1;
    }

    .cls-2, .cls-3 {
        fill: #151c0d;
    }

    .cls-2 {
        font-size: 31px;
        font-family: Europa-Regular;
    }

    .cls-3 {
        stroke: rgba(255,252,252,0.5);
    }

    .cls-4 {
        filter: url(#Icon_map-department-store);
    }
`

export default class Shopping extends Component {
    render() {
        return (
            <Style>
                <svg width="273.298" height="306" viewBox="0 0 273.298 306">
                    <defs>
                        <filter id="Icon_map-department-store" x="92.241" y="54.28" width="86.765" height="91.319" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood flood-opacity="0.537"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <rect id="Rectangle_461" data-name="Rectangle 461" class="cls-1" width="273.298" height="306"/>
                    <text id="Shopping-2" data-name="Shopping" class="cls-2" transform="translate(135.412 224.885)"><tspan x="-62.697" y="0">Shopping</tspan></text>
                    <g class="cls-4" transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path id="Icon_map-department-store-2" data-name="Icon map-department-store" class="cls-3" d="M52.373,15.615V10.509c0-4.173-3.547-8.349-7.718-8.349H30.624c-4.169,0-8.524,4.176-8.524,8.349v5.106H13.166L3.6,74.479H71.188L61.47,15.615h-9.1ZM27.146,10.509a3.888,3.888,0,0,1,3.478-3.3H44.655c1.559,0,2.672,1.741,2.672,3.3v5.106H27.146Z" transform="translate(98.23 58.62)"/>
                    </g>
                </svg>
            </Style>
        )
    }
}
