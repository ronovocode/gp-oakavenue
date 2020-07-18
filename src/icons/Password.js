import React, { Component } from 'react'
import styled from 'styled-components';

const Style = styled.div`

`

export default class Password extends Component {
    render() {
        return (
            <Style>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17.143" viewBox="0 0 15 17.143">
                    <path class="a" d="M13.393,7.5h-.8V5.089a5.089,5.089,0,1,0-10.179,0V7.5h-.8A1.608,1.608,0,0,0,0,9.107v6.429a1.608,
                                    1.608,0,0,0,1.607,1.607H13.393A1.608,1.608,0,0,0,15,15.536V9.107A1.608,1.608,0,0,0,13.393,7.5Zm-3.482,
                                    0H5.089V5.089a2.411,2.411,0,1,1,4.821,0Z"/>
                </svg>
            </Style>
        )
    }
}
