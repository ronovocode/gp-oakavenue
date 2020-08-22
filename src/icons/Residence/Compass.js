import React from 'react';

export default function Compass(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} {...props} xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875"><path d="M15.847,16.409a2.25,2.25,0,1,0,3.182,0,2.249,2.249,0,0,0-3.182,0ZM17.438.563A17.438,17.438,0,1,0,34.875,18,17.437,17.437,0,0,0,17.438.563Zm8.869,10.41-4.639,10.15a2.246,2.246,0,0,1-1.109,1.109L10.41,26.869a1.39,1.39,0,0,1-1.842-1.842l4.639-10.15a2.246,2.246,0,0,1,1.109-1.109L24.465,9.13A1.39,1.39,0,0,1,26.307,10.972Z" transform="translate(0 -0.563)"/></svg>
    )
}