import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import styled, { ThemeConsumer } from 'styled-components';

import apartments from '../../static/data';

import API from '../../utils/API';

// 3D Plans
import plan_293A from '../../static/img/thumbnails/293A.png';
import plan_293D from '../../static/img/thumbnails/293D.png';
import plan_297D from '../../static/img/thumbnails/297D.png';
import plan_301A from '../../static/img/thumbnails/301A.png';
import plan_301B301D297C293B from '../../static/img/thumbnails/301B301D297C293B.png';
import plan_301C301E297B293C from '../../static/img/thumbnails/301C301E297B293C.png';
import plan_301F297A from '../../static/img/thumbnails/301F297A.png';

// Need to make alias for each 3D plan so that the page populates the appropriate one 
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

    .collection-button {
        padding: 0rem 3rem 0.5rem 0;
        border-bottom: 1px solid #D2CCA1;
        cursor: pointer;
    }

`
const collections = {
    "The Grande Collection": ["301A", "301F", "297A", "297D", "293A", "293D"],
    "The Vista Collection": ["301B", "301C", "301D", "301E", "297B", "297C", "293B", "293C"]
}

export default class Our_Collections extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collection_open: 0,
        }
    }

    componentDidMount() {
        document.title = "Our Collections"

        API.GET_COLLECTION("The Vista Collection").then(res => {
            console.log(res.data.images);
            this.setState({
                vista_images: res.data.images
            })
        });
    }

    open_collection(button) {
        console.log("WORKING");
    }

    render() {
        return (
                <Wrapper className="container">
                    <h1 className="mt-5 text-center">Our collections</h1>
                    <hr style={{backgroundColor: '#fff'}} />
                    <div data-toggle="collapse" data-target="#grande-collection" className="collection-button mt-5">
                        <div className="row">
                            <div className="col">
                                <h3>The Grande Collection</h3>
                            </div>
                            <div className="d-flex col justify-content-end">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="collapse" id="grande-collection">
                        <p className="ml-5 mt-4">This collection offers corner townhomes with ample outdoor recreation space. </p>
                        <div>
                            {collections["The Grande Collection"] ? (
                                <div className="row">
                                    {collections["The Grande Collection"].map(apartment => (
                                        <Link className="col-md-4 p-3" to={"/residence/" + apartments[apartment].unit}>  
                                            <Card type="apartment" className="border">
                                                <img alt={apartments[apartment].PLAN3D} src={thumbnails[apartments[apartment].PLAN3D]}></img>
                                                <h3 className="unitnumber mt-4"><b>{apartments[apartment].unit}</b></h3>
                                                <p className="float-left">
                                                    {apartments[apartment].square_footage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sq ft
                                                    <br />
                                                    {apartments[apartment].number_of_bedrooms} bedrooms
                                                    <br />
                                                    {apartments[apartment].number_of_bathrooms} bathrooms
                                                </p>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#vista-collection" className="collection-button mt-5">
                        <div className="row">
                            <div className="col">
                                <h3>The Vista Collection</h3>
                            </div>
                            <div className="d-flex col justify-content-end">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="collapse" id="vista-collection">
                        <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                {this.state.vista_images ? (
                                    <div>
                                        <div class="carousel-item active">
                                            <img src={this.state.vista_images[0]} class="d-block w-100" alt={this.state.vista_images[0]}></img>
                                        </div>
                                        {this.state.vista_images.map(image => (
                                            <div class="carousel-item">
                                                <img src={image} class="d-block w-100" alt={image}></img>
                                            </div>
                                        ))}
                                    </div>
                                )
                                : 
                                    <h3>NO RESULTS</h3>
                                
                                }
                            </div>
                            <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <p>The Vista Collection offers beautiful views of the moutains. Lorem ipsum dolor</p>
                            </div>
                            <div className="col"></div>
                        </div>
                        <h3 className="mt-5">Floor Plans</h3>
                        <hr style={{backgroundColor: '#d2cca1'}}/>
                        <div>
                            {collections["The Vista Collection"] ? (
                                <div className="row">
                                    {collections["The Vista Collection"].map(apartment => (
                                        <Link className="col-md-4 p-3" to={"/residence/" + apartments[apartment].unit}>  
                                            <Card type="apartment" className="border">
                                                <img alt={apartments[apartment].PLAN3D} src={thumbnails[apartments[apartment].PLAN3D]}></img>
                                                <h3 className="unitnumber mt-4"><b>{apartments[apartment].unit}</b></h3>
                                                <p className="float-left">
                                                    {apartments[apartment].square_footage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sq ft
                                                    <br />
                                                    {apartments[apartment].number_of_bedrooms} bedrooms
                                                    <br />
                                                    {apartments[apartment].number_of_bathrooms} bathrooms
                                                </p>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </div>
                    </div>
                    
                </Wrapper>
        )
    }
}
