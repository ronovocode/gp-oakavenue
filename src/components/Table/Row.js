import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    toggleEdit = e => {
        this.setState({editMode: !this.state.editMode});
        console.log(e.target)
    }

    render() {
        if(this.state.editMode) {
            return (
                <tr key={this.props.index}>
                    {Object.entries(this.props.obj).map((value, index) => {
                        return(
                            <td key={index}>
                                <input className="w-100" placeholder={value[1]}></input>
                            </td>
                        )
                    })}
                </tr>
            )
        } else {
            return(
                <tr onClick={this.toggleEdit} key={this.props.index}>
                    {Object.entries(this.props.obj).map((value, index) => {
                        return(
                            <td key={index}>
                                {value[1]}
                            </td>
                        )
                    })}
                </tr>
            )
        }
    }
}

Row.propTypes = {
    obj: PropTypes.object,
    index: PropTypes.number
}

export default Row