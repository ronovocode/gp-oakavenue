import React, { Component } from 'react'

import neighborhoodImage from '../../static/img/redwoodcitybg.jpg';

import Shopping from '../../icons/Neighborhood/Shopping';
import Dining from '../../icons/Neighborhood/Dining';
import Schools from '../../icons/Neighborhood/Schools';
import ParkTrail from '../../icons/Neighborhood/ParkTrail';
import './style.css';

export default class Neighborhood extends Component {

    componentDidMount() {
        document.title = "About Redwood City"
    }

    render() {
        return (
            <div>
                <div className="hero">
                    <img className="bg" src={neighborhoodImage} alt="kitchen"></img>
                    
                    <div className="row py-5 pt-5 pr-5">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 align-middle">
                            <h1>About Redwood City</h1>
                            <hr />
                            <p>This is an example of what a content section on a page might look like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row py-5">
                        <div className="col-md-6 text-center">
                            <Shopping />
                        </div>
                        <div className="col-md-6 p-5">
                            <h2>Shopping</h2>
                            <hr />
                            <p>
                                This is an example of what a content section on a page might look like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6 p-5">
                            <h2>Dining</h2>
                            <hr />
                            <p>
                                This is an example of what a content section on a page might look like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <Dining />
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6 text-center">
                            <Schools />
                        </div>
                        <div className="col-md-6 p-5">
                            <h2>Schools</h2>
                            <hr />
                            <p>
                                This is an example of what a content section on a page might look like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h2>Parks & Trails</h2>
                            <hr />
                            <p>
                                This is an example of what a content section on a page might look like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <ParkTrail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
