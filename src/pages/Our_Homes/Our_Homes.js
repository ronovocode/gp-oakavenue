import React, { Component } from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import styled from 'styled-components';

import apartments from '../../static/data';

// 3D Plans
import plan_293A from '../../static/img/thumbnails/293A.png';
import plan_293D from '../../static/img/thumbnails/293D.png';
import plan_297D from '../../static/img/thumbnails/297D.png';
import plan_301A from '../../static/img/thumbnails/301A.png';
import plan_301B301D297C293B from '../../static/img/thumbnails/301B301D297C293B.png';
import plan_301C301E297B293C from '../../static/img/thumbnails/301C301E297B293C.png';
import plan_301F297A from '../../static/img/thumbnails/301F297A.png';

// Need to make alias for each plan so that the page populates the appropriate one 
const thumbnails = {
    "293A.png": plan_293A,
    "293D.png": plan_293D,
    "297D.png": plan_297D,
    "301A.png": plan_301A,
    "301B301D297C293B.png": plan_301B301D297C293B,
    "301C301E297B293C.png": plan_301C301E297B293C,
    "301F297A.png": plan_301F297A
}

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
                                    <Link className="col-md-4 p-3" to={"/residence/" + apartment.unit}>  
                                        <Card type="apartment" className="border">
                                            <img alt={apartment.PLAN3D} src={thumbnails[apartment.PLAN3D]}></img>
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
