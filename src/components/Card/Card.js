import React, { Component } from 'react'

import './style.css';

class Card extends Component {
    state = {

    }

    render() {
        const type = this.props.type + "-card";

        return (
            <div className={type}>
                {this.props.children}
            </div>
        )
    }
}

export default Card;