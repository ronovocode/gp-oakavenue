import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Row from './Row';

import styled from 'styled-components'

const Wrapper = styled.div`
    td:hover, th:hover {
        cursor: pointer;
    }

    td, th {
        color: #eee;
    }
    thead{
        background-color: #2D3A3A;
    }

    tr:hover {
        background-color: #2D3A3A;
    }

    input  {
        background-color: transparent;
        border-radius: 0;
        border: 1px solid #aaa;
        padding: 0.1rem 0.3rem;
        color: #ddd;
    }

    input:focus {
        background-color: transparent;
        border-bottom: 1px solid #aaa;
        box-shadow: none;
    }
`

const Titles = function(props) {
    const titles = [];

    for (const [key] of Object.entries(props.obj)) {
        titles.push(key.replace(/_/g, " "));
    }

    return (
        <thead>
            <tr>
                {titles.map((title, index) => {
                    return(
                            <th scope="col" key={index}>{title}</th>
                        )
                })}
            </tr>
        </thead>
    )
}

const Body = function(props) {

    return (
        <tbody>
            {props.list.map((obj, index) => {
                        return(
                            <Row obj={obj} index={index} />
                        )
                    }
                )
            }
        </tbody>
    )
}

class Table extends Component {

    render() {
        return (
            <Wrapper>
                <table className="table table-responsive table-bordered">
                    <Titles obj={this.props.list[0]}/>
                    <Body onClick={this.props.onClick} list={this.props.list} />
                </table>
            </Wrapper>
        )
    }
}

Table.propTypes = {
    children: PropTypes.element
}

export default Table