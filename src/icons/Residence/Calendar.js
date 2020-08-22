import React from 'react';

export default function Calendar(props) {
    const color = {
        color: props.color,
        fill: props.color
    }

    return (
        <svg style={color} xmlns="http://www.w3.org/2000/svg" width="28.921" height="30.849" viewBox="0 0 28.921 30.849" {...props}>
            <path d="M12.211,13.5h3.856v3.856H12.211Zm5.784,0h3.856v3.856H17.995Zm5.784,0h3.856v3.856H23.779ZM6.427,25.064h3.856v3.856H6.427Zm5.784,0h3.856v3.856H12.211Zm5.784,0h3.856v3.856H17.995ZM12.211,19.28h3.856v3.856H12.211Zm5.784,0h3.856v3.856H17.995Zm5.784,0h3.856v3.856H23.779Zm-17.352,0h3.856v3.856H6.427ZM27.635,1.928V3.856H23.779V1.928h-13.5V3.856H6.427V1.928H2.571V32.777H31.491V1.928H27.635Zm1.928,28.921H4.5V9.64H29.563Z" transform="translate(-2.571 -1.928)"/>
        </svg>
    )
}