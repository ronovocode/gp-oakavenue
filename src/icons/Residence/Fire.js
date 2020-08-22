import React from 'react';

export default function Fire(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} xmlns="http://www.w3.org/2000/svg" width="26.784" height="30.849" viewBox="0 0 26.784 30.849" {...props}><path d="M12.241,32.777c-2.056-4.278-.961-6.729.619-9.039A14.4,14.4,0,0,0,15.037,18.7a5.913,5.913,0,0,1,.816,4.534,11.443,11.443,0,0,0,2.494-8.57c5.432,3.8,7.754,12.016,4.625,18.107,16.64-9.415,4.139-23.5,1.963-25.09.725,1.587.863,4.273-.6,5.577C21.851,3.856,15.717,1.928,15.717,1.928c.725,4.852-2.63,10.157-5.865,14.121A10.485,10.485,0,0,0,8.6,10.928c-.228,3.514-2.914,6.379-3.641,9.9C3.973,25.6,5.7,29.088,12.241,32.777Z" transform="translate(-4.701 -1.928)"/></svg>
    )
}