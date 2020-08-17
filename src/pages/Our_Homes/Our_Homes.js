import React, { Component } from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import { apartments } from '../../static/data';

export default class Our_Homes extends Component {
    state = {
        apartments: [
            {
                number: "#221",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 890,
                numBed: 2,
                numBath: 2,
                price: 1400,
                id: 1
            },
            {
                number: "#222",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 902,
                numBed: 2,
                numBath: 2,
                price: 1700,
                id: 2
            },
            {
                number: "#223",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 1102,
                numBed: 2,
                numBath: 2,
                price: 3200,
                id: 3
            },
            {
                number: "#226",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 890,
                numBed: 2,
                numBath: 2,
                price: 2400,
                id: 4
            },
            {
                number: "#228",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 890,
                numBed: 2,
                numBath: 2,
                price: 3450,
                id: 5
            },
            {
                number: "#221",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 890,
                numBed: 2,
                numBath: 2,
                price: 2640,
                id: 6
            },
            {
                number: "#221",
                url: "http://source.unsplash.com/random/600x600",
                squareFootage: 890,
                numBed: 2,
                numBath: 2,
                price: 1050,
                id: 7
            }
        ]
    }

    componentDidMount() {
        document.title = "Our Homes"
    }

    render() {
        return (
                <div className="container">
                    <Router />
                    <h1 className="mt-5">Our homes</h1>
                    <hr style={{backgroundColor: '#fff'}} />
                    <div>
                        {this.state.apartments.length ? (
                            <div className="row">
                                {this.state.apartments.map(apartment => (
                                    <Link className="col-md-4" to="/residence">  
                                        <Card type="apartment">
                                            <img alt="test" src={apartment.url}></img>
                                            <h3 className="mt-4"><b>{apartment.number}</b></h3>
                                            <p className="float-left">
                                                {apartment.squareFootage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sq ft
                                                <br />
                                                {apartment.numBed} bedrooms
                                                <br />
                                                {apartment.numBath} bathrooms
                                            </p>

                                            {/* This line uses reg-ex to add thousand's place comma separators */}
                                            <p className="float-right">${apartment.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/mo </p>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </div>
                </div>
        )
    }
}
