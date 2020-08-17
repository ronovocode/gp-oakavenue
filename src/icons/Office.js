import React from 'react';

export default function Office(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} xmlns="http://www.w3.org/2000/svg" width="40.5" height="36" viewBox="0 0 40.5 36"{...props}>
            <path d="M37.125,0H3.375A3.376,3.376,0,0,0,0,3.375v22.5A3.376,3.376,0,0,0,3.375,29.25h13.5L15.75,32.625H10.688a1.688,1.688,0,0,0,0,3.375H29.813a1.688,1.688,0,0,0,0-3.375H24.75L23.625,29.25h13.5A3.376,3.376,0,0,0,40.5,25.875V3.375A3.376,3.376,0,0,0,37.125,0ZM36,24.75H4.5V4.5H36Z"/>
        </svg>
    )
}