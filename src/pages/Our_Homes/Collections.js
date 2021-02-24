import React, { Component, useState, setState } from 'react'
import {Link} from 'react-router-dom';

import Card from '../../components/Card/Card';
import Grande from '../../components/Draw/Grande';

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

// const Wrapper = styled.div`
//     .unitnumber {
//         color: #D2CCA1
//     }

//     .collection-button {
//         padding: 0rem 3rem 0.5rem 0;
//         border-bottom: 1px solid #D2CCA1;
//         cursor: pointer;
//     }

//     h1, h2, h3, h4 {
//         color: #D2CCA1;
//     }

//     .vcenter {
//         display: inline-block;
//         vertical-align: middle;
//         float: none;
//     }

//     .opencollection {
//         background: none;
//         border: none;
//         position: relative;
//         padding: 0;

//         .overlay {
//             height: 100%;
//             width: 100%;
//             position: absolute;
//             background-color: rgba(0,0,0,0.6);
//             transition: 0.2s;
//             h3 {
//                 position: absolute;
//                 left: 50%;
//                 top: 50%;
//                 transform: translate(-50%, -50%);
//             }
            
//             p {
//                 position: absolute;
//                 left: 50%;
//                 top: 60%;
//                 transform: translateX(-50%);
//             }

//             :hover {
//                 background-color: rgba(0,0,0,0.6);
//             }
//         }

//         :focus {
//             border: none;
//         }
//     }

//     .spacer {
//         height: 50vh;
//     }

// `

const Wrapper = styled.div`
    .collection {

    }

    h1, h2, h3, h4, h5 {
        color: #D2CCA1;
    }

    .floor-card {
        background-color: transparent;
        border: none;

        h4 {
            font-size: 2rem;
            font-weight: 600;
        }

        :hover {
            cursor: pointer;
        }
    }

    .modal-header, .modal-footer {
        border: none;
    }

    .modal-body {
        border: none;
    }
`
const collections = {
    "The Grande Collection": ["301A", "301F", "297A", "297D", "293A", "293D"],
    "The Vista Collection": ["301B", "301C", "301D", "301E", "297B", "297C", "293B", "293C"]
}

function Collection(props) {
    return(
        <div className="collection">
            <div className="row mt-4">
                <div className="col-md-6 p-5 v-center">
                    <Grande />
                    <div className="row mt-3">
                        <div className="col">
                            <p>
                                Our grande collection offers all the quality amenities of the Vista collection, and more! In this collection, 
                                you will find townhomes with a 350 sq ft private patio that is connected to the main patio, as well as fireplaces in 
                                each living room. Explore our floor plans below.  
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612138534198_K1000889.jpg" className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}

function FloorCard(props) {
    let apartment = props.apartment;
    var [focused, toggleFocus] = React.useState(false);
    console.log(apartment);

    return(
        <div onClick={() => toggleFocus(!focused)} data-bs-toggle="modal" data-bs-target={"#apartment-" + props.id} className="col-md-6 p-3 floor-card" {...props}>
            <div className="row">
                <div className="col-9">
                    <img className="mx-auto" alt={apartment.PLAN3D} src={thumbnails[apartment.PLAN3D]}></img>
                </div>
                <div className="col-3">
                    <h4 className="mt-5">{apartment.unit}</h4>
                </div>
            </div>
            <div className="modal fade" id={"apartment-" + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{apartment.unit}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="ml-5 img-fluid mb-5" alt={apartment.PLAN3D} src={thumbnails[apartment.PLAN3D]}></img>
                        <p>
                            {apartment.square_footage} sq ft.
                        </p>
                        <p>
                            {apartment.number_of_bedrooms} bedrooms
                        </p>
                        <p>
                            {apartment.number_of_bathrooms} bathrooms
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
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

        // API.GET_COLLECTION("The Vista Collection").then(res => {
        //     console.log(res.data.images);
        //     this.setState({
        //         vista_images: res.data.images
        //     })
        // });
    }

    open_collection = ()  => window.scrollTo(0, this.scrollRef.current.offsetTop - 26)

    render() {
        return (
            <Wrapper className="container mt-3">
                <h1 className="mt-5 text-gold">Availability</h1>
                <hr style={{backgroundColor: '#fff'}} />
                <Collection />
                <div className="row my-5 p-3">
                    <div className="col-md-6 vcenter">
                        <h3>Tranquility</h3>
                        <p>With luxurious outdoor seating, and a cozy fireplace, any home in our <b>Grande Collection</b> is guaranteed to make you feel right at home</p>
                        
                    </div>
                    <div className="col-md-6 vcenter">
                        <div id="kitchen_carousel_controls" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612140753583_K1000645-2.jpg" class="d-block w-100" alt="kitchen1"></img>
                                </div>
                                {/* <div class="carousel-item">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611872872111_K1000100.jpg" class="d-block w-100" alt="kitchen2"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873093049_K1000110.jpg" class="d-block w-100" alt="kitchen3"></img>
                                </div> */}
                            </div>
                            <a class="carousel-control-prev" href="#kitchen_carousel_controls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#kitchen_carousel_controls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 vcenter">
                        <div id="mastersuite_carousel_controls" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1613441240627_K1000922-HDR.jpg" class="d-block w-100" alt="kitchen2"></img>
                                </div>
                                {/* <div class="carousel-item">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1610184490999_K1000246.jpg" class="d-block w-100" alt="kitchen1"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873662855_K1000269.jpg" class="d-block w-100" alt="kitchen3"></img>
                                </div> */}
                            </div>
                            <a class="carousel-control-prev" href="#mastersuite_carousel_controls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#mastersuite_carousel_controls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Outdoor Area</h3>
                        <p>From entertainin friends and family, to flexing your green thumb with a private garden, the possibilities are endless with your very own patio area. </p>
                    </div>
                </div>
                <h4 className="mt-5">Available townhomes</h4>
                <hr style={{backgroundColor: '#d2cca1'}}/>
                <div>
                    {collections["The Grande Collection"] ? (
                        <div className="row">
                            {collections["The Grande Collection"].map((index, tick) => {
                                        let apartment = apartments[index];
                                        
                                        return(
                                            <FloorCard id={tick} apartment={apartment}>

                                            </FloorCard>
                                        )
                                    }
                                )
                            }
                        </div>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </div>

                {/* <h1 className="mt-5">Our townhome collections</h1>
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
                                        <img className="img-fluid" src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1612138534198_K1000889.jpg"></img>
                                        <h2 className="mt-5">The Vista Collection</h2>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <p>
                                                Our grande collection offers all the quality amenities of the Vista collection, and more! In this collection, 
                                            you will find townhomes with a 350 sq ft private patio that is connected to the main patio, as well as fireplaces in 
                                            each living room. Explore our floor plans below.  
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
                </div> */}
            <div className="spacer"></div>
            </Wrapper>
        )
    }
}
