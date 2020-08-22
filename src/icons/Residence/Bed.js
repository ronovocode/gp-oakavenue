import React, { Component } from 'react';

export default class Bed extends Component {
    constructor(props) {
        super(props);
        this.color = {
            color: this.props.color,
            fill: this.props.color
        };
    }

    render() {
        return (
            <svg style={this.color} xmlns="http://www.w3.org/2000/svg" width="45" height="27" viewBox="0 0 45 27" {...this.props}>
                <path d="M12.375,18A5.625,5.625,0,1,0,6.75,12.375,5.632,5.632,0,0,0,12.375,18Zm24.75-9H21.375a1.125,1.125,0,0,0-1.125,1.125V20.25H4.5V5.625A1.125,1.125,0,0,0,3.375,4.5H1.125A1.125,1.125,0,0,0,0,5.625v24.75A1.125,1.125,0,0,0,1.125,31.5h2.25A1.125,1.125,0,0,0,4.5,30.375V27h36v3.375A1.125,1.125,0,0,0,41.625,31.5h2.25A1.125,1.125,0,0,0,45,30.375v-13.5A7.875,7.875,0,0,0,37.125,9Z" transform="translate(0 -4.5)"/>
            </svg>
        )
    }
}