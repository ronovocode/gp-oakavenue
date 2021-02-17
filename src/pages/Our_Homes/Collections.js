import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import styled from 'styled-components';

import apartments from '../../static/data';

import API from '../../utils/API';

// Lightbox
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

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

    h1, h2, h3, h4 {
        color: #D2CCA1;
    }

    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }

    .opencollection {
        background: none;
        border: none;
        position: relative;
        padding: 0;

        .overlay {
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba(0,0,0,0.6);
            transition: 0.2s;
            h3 {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            
            p {
                position: absolute;
                left: 50%;
                top: 60%;
                transform: translateX(-50%);
            }

            :hover {
                background-color: rgba(0,0,0,0.6);
            }
        }

        :focus {
            border: none;
        }
    }

    .spacer {
        height: 50vh;
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
            lightboxIndex: 0,
            lightboxIsOpen: false
        }


        this.scrollRef = React.createRef();
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

    open_collection = ()  => window.scrollTo(0, this.scrollRef.current.offsetTop - 26)

    render() {
        return (
            <Wrapper className="container">
                <h1 className="mt-5">Our townhome collections</h1>
                <hr style={{backgroundColor: '#fff'}} />
                <div id="collapseGroup" className="accordion">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <button onClick={this.open_collection} data-toggle="collapse" data-target="#vista-collection" className="opencollection">
                                <div className="overlay">
                                    <h3>The Vista Collection</h3>
                                    <p>Click for more</p>
                                </div>
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612138534198_K1000889.jpg"></img>
                            </button>
                        </div>
                        <div className="col-md-6 pt-5">
                            <button onClick={this.open_collection} data-toggle="collapse" data-target="#grande-collection" className="opencollection">
                                <div className="overlay">
                                    <h3>The Grande Collection</h3>
                                    <p>Click for more</p>
                                </div>
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612140753583_K1000645-2.jpg"></img>
                            </button>
                        </div>
                    </div>
                    <div ref={this.scrollRef} className="row mt-5 accordion-group">
                        <div className="col">
                            <div className="collapse" data-parent="#collapseGroup" id="vista-collection">
                                {/* <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
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
                                </div> */}
                                <div className="row mt-5">
                                    <div className="col">
                                        <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612138534198_K1000889.jpg"></img>
                                        <h2 className="mt-5">The Vista Collection</h2>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <p>
                                                The Vista Collection offers each resident a lifestyle of true luxury, with the amenities, space, smart technology, and privacy for two. With 
                                                    beautiful views of the mountains, and ample outdoor recreation space, you're guaranteed to feel right at home with any Vista Collection townhome. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mt-5">Floor Plans</h4>
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
                            <div className="collapse" data-parent="#collapseGroup" id="grande-collection">
                                <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612140753583_K1000645-2.jpg"></img>
                                <h2 className="mt-5">The Grande Collection</h2>
                                <div className="row mt-3">
                                    <div className="col">
                                        <p>
                                            Our grande collection offers all the quality amenities of the Vista collection, and more! In this collection, 
                                            you will find townhomes with a 350 sq ft private patio that is connected to the main patio, as well as fireplaces in 
                                            each living room. Explore our floor plans below. 
                                        </p>
                                    </div>
                                </div>
                                <h4 className="mt-5">Floor Plans</h4>
                                <hr style={{backgroundColor: '#d2cca1'}}/>
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
                        </div>
                    </div>
                </div>
            <div className="spacer"></div>
            </Wrapper>
        )
    }
}
