import React from 'react';

export default function Washer(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} {...props} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M0,0V18l6.75-6.75L13.5,18,18,13.5,11.25,6.75,18,0ZM22.5,18,18,22.5l6.75,6.75L18,36H36V18l-6.75,6.75Z"/></svg>
    )
}