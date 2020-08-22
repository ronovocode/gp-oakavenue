import React from 'react';

export default function Washer(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} {...props} xmlns="http://www.w3.org/2000/svg" width="45.006" height="36" viewBox="0 0 45.006 36"><path d="M44.381,6.785,30.691,0C29.278,1.955,26.149,3.319,22.5,3.319S15.722,1.955,14.309,0L.619,6.785A1.133,1.133,0,0,0,.112,8.3l4.022,8.051a1.133,1.133,0,0,0,1.512.506l3.98-1.948a1.123,1.123,0,0,1,1.617,1.012V33.75A2.248,2.248,0,0,0,13.493,36h18a2.248,2.248,0,0,0,2.25-2.25V15.912A1.126,1.126,0,0,1,35.36,14.9l3.98,1.948a1.121,1.121,0,0,0,1.512-.506L44.88,8.3a1.123,1.123,0,0,0-.5-1.512Z" transform="translate(0.004)"/></svg>    )
}