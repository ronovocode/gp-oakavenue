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
    filter:url(#e);
}

.e{
    filter:url(#c);
}

.f{
    filter:url(#a);
}
`

export default class Schools extends Component {
    render() {
        return (
            <Style>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="273.298" height="306" viewBox="0 0 273.298 306"><defs><filter id="a" x="101.446" y="91.609" width="43.308" height="49.38" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.506"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter><filter id="c" x="129.712" y="91.45" width="43.308" height="49.539" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="d"/><feFlood flood-opacity="0.506"/><feComposite operator="in" in2="d"/><feComposite in="SourceGraphic"/></filter><filter id="e" x="90.943" y="58.871" width="92.588" height="71.64" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="f"/><feFlood flood-opacity="0.506"/><feComposite operator="in" in2="f"/><feComposite in="SourceGraphic"/></filter></defs><rect class="a" width="273.298" height="306"/><g transform="translate(100.443 65.405)"><g class="f" transform="matrix(1, 0, 0, 1, -100.44, -65.4)"><path class="b" d="M6.813,19.764V34.989a1.33,1.33,0,0,0,.657,1.15L29.15,48.605a1.317,1.317,0,0,0,1.971-1.15V32.049a1.33,1.33,0,0,0-.657-1.15L8.784,18.6A1.337,1.337,0,0,0,6.813,19.764Z" transform="translate(104.13 79.69)"/></g><g class="e" transform="matrix(1, 0, 0, 1, -100.44, -65.4)"><path class="b" d="M20.869,48.7l21.7-12.466a1.311,1.311,0,0,0,.657-1.15V19.691a1.319,1.319,0,0,0-1.971-1.15L19.571,31.007a1.311,1.311,0,0,0-.657,1.15V47.563A1.3,1.3,0,0,0,20.869,48.7Z" transform="translate(120.3 79.6)"/></g><g class="d" transform="matrix(1, 0, 0, 1, -100.44, -65.4)"><path class="b" d="M37.8,4.775,2.982,25.108a1.312,1.312,0,0,0,0,2.283L37.8,46.738a2.644,2.644,0,0,0,2.611,0L71.306,29.049c.87-.509,1.15.131,1.15,1.15V55.394c0,1.117.641,1.642,1.807,1.642h0a1.619,1.619,0,0,0,1.642-1.642V27.177a1.33,1.33,0,0,0-.657-1.15L40.413,4.775A2.644,2.644,0,0,0,37.8,4.775Z" transform="translate(98.13 60.97)"/></g></g><text class="c" transform="translate(137.092 225.885)"><tspan x="-53.472" y="0">Schools</tspan></text></svg>
            </Style>
        )
    }
}
