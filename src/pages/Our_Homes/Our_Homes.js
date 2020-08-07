import React, { Component } from 'react'
import Slider from '../../components/Slider/Slider';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Dropdown from 'react-dropdown';
import '../../utils/globalstyles/dropdown.css'

const options = {
    bedrooms: ['2 bedrooms', '3 bedrooms', '4 bedrooms'],
    bathrooms: ['2 bathrooms', '3 bathrooms', '4 bathrooms']
};

const defaultOption = options[0];

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
                    {/* <div className="filters row mb-4">
                        <div className="col-md-4">
                            <Dropdown className="mb-2" options={options.bedrooms} onChange={this._onSelect} value={defaultOption} placeholder="# of bedrooms" />
                            <Dropdown className="mb-2" options={options.bathrooms} onChange={this._onSelect} value={defaultOption} placeholder="# of bathrooms" />
                            <Button style={{backgroundColor: '#D2CCA1', color: '#212121'}} text="Apply Filters"/>
                        </div>
                        <div className="col-md-8">
                            <Slider className="mb-3" />
                        </div>
                    </div> */}
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
