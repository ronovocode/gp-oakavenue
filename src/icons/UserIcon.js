import React, { Component } from 'react';

export default class UserIcon extends Component {
    constructor(props) {
        super(props);
        this.color = {
            color: this.props.color,
            fill: this.props.color
        };
    }

    render() {
        return (
            <svg style={this.color} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" {...this.props}>
                <path
                    d="M7.5,8.438A4.219,4.219,0,1,0,3.281,4.219,4.22,4.22,0,0,0,7.5,8.438Zm3.75.938H9.636a5.1,5.1,0,0,1-4.271,0H3.75A3.75,3.75,0,0,0,0,13.125v.469A1.407,1.407,0,0,0,1.406,15H13.594A1.407,1.407,0,0,0,15,13.594v-.469A3.75,3.75,0,0,0,11.25,9.375Z" />
            </svg>
        )
    }
}