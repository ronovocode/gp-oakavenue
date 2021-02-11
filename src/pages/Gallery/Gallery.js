import React, { Component } from 'react'

import styled from 'styled-components';

const Wrapper = styled.div`

    
`

export default class Gallery extends Component {

    componentDidMount() {
        document.title = "Gallery"


    }

    render() {
        return (
            <Wrapper className="container">
                
            </Wrapper>
        )
    }
}
