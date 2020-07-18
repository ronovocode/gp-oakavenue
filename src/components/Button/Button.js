import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    button {
        width: 100%;
        background-color: transparent;
        padding: 0.7rem;
        font-weight: lighter;
    }

    button:focus {
        outline: none;
    }
`

class Button extends Component {
    render() {
        return (
            <ButtonWrapper {...this.props}>
                <button>{this.props.text}</button>
            </ButtonWrapper>
        )
    }
}

export default Button