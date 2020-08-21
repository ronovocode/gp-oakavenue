import React, { Component } from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import styled from 'styled-components';

import apartments from '../../static/data';

const Wrapper = styled.div`
    .unitnumber {
        color: #D2CCA1
    }
`

export default class Our_Homes extends Component {

    componentDidMount() {
        document.title = "Our Homes"
    }

    render() {
        return (
                <Wrapper className="container">
                    <Router />
                    <h1 className="mt-5">Our homes</h1>
                    <hr style={{backgroundColor: '#fff'}} />
                    <div>
                        {apartments.length ? (
                            <div className="row">
                                {apartments.map(apartment => (
                                    <Link className="col-md-4" to={"/residence/" + apartment.unit}>  
                                        <Card type="apartment">
                                            {/* <img alt="test" src={apartment.url}></img> */}
                                            <h3 className="unitnumber mt-4"><b>{apartment.unit}</b></h3>
                                            <p className="float-left">
                                                {apartment.square_footage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sq ft
                                                <br />
                                                {apartment.number_of_bedrooms} bedrooms
                                                <br />
                                                {apartment.number_of_bathrooms} bathrooms
                                            </p>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </div>
                </Wrapper>
        )
    }
}
