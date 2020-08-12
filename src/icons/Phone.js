import React, { Component } from 'react';

export default function House(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} xmlns="http://www.w3.org/2000/svg" width="36.001" height="36.001" viewBox="0 0 36.001 36.001" {...props}>
            <path d="M34.692,1.73,27.38.042a1.7,1.7,0,0,0-1.934.977L22.071,8.895a1.683,1.683,0,0,0,.485,1.969l4.261,3.488A26.059,26.059,0,0,1,14.358,26.81L10.87,22.549A1.686,1.686,0,0,0,8.9,22.064L1.027,25.439A1.708,1.708,0,0,0,.042,27.38L1.73,34.692A1.687,1.687,0,0,0,3.375,36,32.621,32.621,0,0,0,36,3.375,1.685,1.685,0,0,0,34.692,1.73Z" transform="translate(0.001 0.001)"/>
        </svg>
    )
}