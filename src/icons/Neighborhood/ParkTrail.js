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
    font-size:32px;font-family:Europa-Regular;
}

.d{
    filter:url(#a);
}
`

export default class ParkTrail extends Component {
    render() {
        return (
            <Style>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="273.298" height="306" viewBox="0 0 273.298 306"><defs><filter id="a" x="86.271" y="72.92" width="103.092" height="77.397" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.647"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-0.5)"><rect class="a" width="273.298" height="306" transform="translate(0.5)"/><g class="d" transform="matrix(1, 0, 0, 1, 0.5, 0)"><path class="b" d="M27.927,34.611H53.622L46.614,13.588H37.271ZM16.248,13.588V6.58H69.973v7.008H55.958l7.008,21.023H83.988v7.008H67.637l9.344,23.359H67.637L58.294,41.618h-32.7L16.248,64.977H6.9l9.344-23.359H-.1V34.611H20.919l7.008-21.023Z" transform="translate(95.87 72.84)"/></g><text class="c" transform="translate(135.546 225.885)"><tspan x="-93.008" y="0">Parks &amp; Trails</tspan></text></g></svg>
            </Style>
        )
    }
}
