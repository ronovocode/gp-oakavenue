import React, { Component } from 'react'

import styled from 'styled-components'

import UserIcon from '../../icons/UserIcon'
import Clock from '../../icons/Clock'

const Wrapper = styled.div`

`

export default class NewsCard extends Component {
    render() {
        return (
            <Wrapper className="mb-4">
                <h4>{this.props.title}</h4>
                <p>{this.props.body}</p>
                <span className="text-muted">
                    <UserIcon color="#fff" className="mr-3"/>
                    {this.props.source}
                </span>
                <span className="text-muted" style={{float: "right"}}>
                    <Clock color="#fff" className="mr-3"/>
                    {this.props.date}
                </span>
            </Wrapper>
        )
    }
}
