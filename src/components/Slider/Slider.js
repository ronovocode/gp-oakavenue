import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';

const Wrapper = styled.div`      
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 3px;
        background: #bcbcbc;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }
      
      .slider:hover {
        opacity: 1;
      }
      
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #D2CCA1;
        cursor: pointer;
      }
      
      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #D2CCA1;
        cursor: pointer;
      }
`

class Slider extends Component {
    state = {
        slider: 0
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render() {
        return (
            <Wrapper {...this.props}>
                <label for="customRange2">{this.state.slider}</label>
                <input value={this.state.slider} onChange={this.handleInputChange} name="slider" type="range" class="slider" min={this.props.start} max={this.props.end}></input>
            </Wrapper>
        )
    }
}

Slider.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number
}

export default Slider;