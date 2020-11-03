import React from 'react'
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

function Button(props) {
    const color = {
        backgroundColor: props.background,
        color: props.text_color
    }

    return (
        <ButtonWrapper {...props}>
            <button style={color}>{props.text}</button>
        </ButtonWrapper>
    )
}

export default Button