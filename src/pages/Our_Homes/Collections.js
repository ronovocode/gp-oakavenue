import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Card from '../../components/Card/Card'
import '../../utils/globalstyles/dropdown.css'

import styled from 'styled-components';

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

    h1, h2, h3 {
        color: #D2CCA1;
    }

    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
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
                    <h1 className="mt-5">Our townhome collections</h1>
                    <hr style={{backgroundColor: '#fff'}} />
                    <h2 className="mt-5">Amenities</h2>
                    <p>Our townhomes offer a luxurious living experience with the amenities, space, smart-technology, and privacy, making the perfect home for a couple or roommates working from home.</p>
                    <div className="row my-5">
                        <div className="col vcenter">
                            <h3>Kitchen</h3>
                            <li>Large custom, maple cognac kitchen cabinet and seating island</li>
                            <li>Calacatta gold Quartz countertop combining with a grayish luminous electric veins and occasional taupe/gold highlights</li>
                            <li>White Travertine backsplashes</li>
                            <li>Kohler stainless steel, professional grade pull out kitchen faucet</li>
                            <li>Luxurious stainless steel Whirlpool appliances</li>
                            <li>Gas range</li>
                            <li>French door refrigerator</li>
                        </div>
                        <div className="col vcenter">
                            <div id="kitchen_carousel_controls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1610185557393_K1000064.jpg" class="d-block w-100" alt="kitchen1"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611872872111_K1000100.jpg" class="d-block w-100" alt="kitchen2"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873093049_K1000110.jpg" class="d-block w-100" alt="kitchen3"></img>
                                    </div>
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
                        <div className="col vcenter">
                            <div id="mastersuite_carousel_controls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1610184490999_K1000246.jpg" class="d-block w-100" alt="kitchen1"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873394428_K1000248.jpg" class="d-block w-100" alt="kitchen2"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873662855_K1000269.jpg" class="d-block w-100" alt="kitchen3"></img>
                                    </div>
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
                        <div className="col">
                            <h3>Master Suite</h3>
                            <li>11’4” x 15” size master bedroom with a balcony</li>
                            <li>Custom closet system</li>
                            <li>Master room shower</li>
                            <li>Luxurious 60” double sink, white vanity</li>
                            <li>Luxurious white porcelain tiles with grayish luminous veins</li>
                            <li>Frameless sliding shower door</li>
                            <li>Rainfall shower head</li>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <h3>2nd Bedroom</h3>
                            <li>10’ x 15’  size bedroom</li>
                            <li>Custom closet system</li>
                        </div>
                        <div className="col vcenter">
                            <div id="secondbedroom_carousel_controls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611869401145_K1000207-2.jpg" class="d-block w-100" alt="kitchen1"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873788991_K1000212-2.jpg" class="d-block w-100" alt="kitchen2"></img>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#secondbedroom_carousel_controls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#secondbedroom_carousel_controls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col vcenter">
                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873928141_K1000223.jpg" class="d-block w-100 img-fluid" alt="kitchen1"></img>
                        </div>
                        <div className="col">
                            <h3>Hallway bathroom</h3>
                            <li>Luxurious 48” single sink, white vanity</li>
                            <li>White tub with frameless sliding shower door</li>
                            <li>Linen closet</li>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <h3>Powder room</h3>
                            <li>Toilet</li>
                            <li>Luxurious 24” white vanity on the 1st floor</li>
                        </div>
                        <div className="col vcenter">
                            <div id="powderroom_carousel_controls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    {/* <div class="carousel-item active">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611869401145_K1000207-2.jpg" class="d-block w-100" alt="kitchen1"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611873788991_K1000212-2.jpg" class="d-block w-100" alt="kitchen2"></img>
                                    </div> */}
                                </div>
                                <a class="carousel-control-prev" href="#powderroom_carousel_controls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#powderroom_carousel_controls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <div className="col vcenter">
                                <div id="WandD_carousel_controls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874169118_K1000136.jpg" class="d-block w-100" alt="kitchen1"></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874228323_K1000145.jpg" class="d-block w-100" alt="kitchen2"></img>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#WandD_carousel_controls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#WandD_carousel_controls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Washer and Dryer</h3>
                            <li>Full size LG Front load Washer and Dryer</li>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <h3>Offices</h3>
                            <li>10’6” x 13’2” size office in the loft above the master suite with a bench and lots of windows and light</li>
                            <li>8’6” x 5’ size den by the living room</li>
                            <li>2 separated offices for a couple working from home</li>
                        </div>
                        <div className="col vcenter">
                                <div id="offices_carousel_controls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874290487_K1000053.jpg" class="d-block w-100" alt="kitchen1"></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874383815_K1000381.jpg" class="d-block w-100" alt="kitchen2"></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874412126_K1000349.jpg" class="d-block w-100" alt="kitchen2"></img>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#offices_carousel_controls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#offices_carousel_controls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="row my-5">
                    <div className="col vcenter">
                                <div id="design_carousel_controls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        {/* <div class="carousel-item active">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874169118_K1000136.jpg" class="d-block w-100" alt="kitchen1"></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874228323_K1000145.jpg" class="d-block w-100" alt="kitchen2"></img>
                                        </div> */}
                                    </div>
                                    <a class="carousel-control-prev" href="#design_carousel_controls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#design_carousel_controls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        <div className="col">
                            <h3>Design</h3>
                            <li>Contemporary design with calming theme throughout the townhome</li>
                            <li>SPC stone-based flooring with wood grain providing beauty and excellent sound and heat insulation</li>
                            <li>Stainless steel door hardware, kitchen cabinet pulls, light fixtures, and drapery rods</li>
                            <li>Smart recessed light throughout</li>
                            <li>Contemporary interior doors</li>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <h3>Smarthome Technology</h3>
                            <li>Wireless smart Halo recessed lights color temperature adjustment, light dimming, sub-grouping, scheduling and timer</li>
                            <li>Nest thermostat controlling centralized heating and AC</li>
                            <li>Schlage Keyless entrance door with unique access codes for tenants and door walkers</li>
                            <li>Ring video bell for visitors and package delivery notification</li>
                            <li>WiFi enabled LG front load washer and dryer for remote setting and notifications</li>
                        </div>
                        <div className="col vcenter">
                                <div id="smarthome_carousel_controls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        {/* <div class="carousel-item active">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874169118_K1000136.jpg" class="d-block w-100" alt="kitchen1"></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://greenpoints3.s3.us-west-1.amazonaws.com/Images/1611874228323_K1000145.jpg" class="d-block w-100" alt="kitchen2"></img>
                                        </div> */}
                                    </div>
                                    <a class="carousel-control-prev" href="#smarthome_carousel_controls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#smarthome_carousel_controls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                    </div>

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
                        <p className="ml-5 mt-4">Our grande collection offers corner townhomes with ample outdoor recreation space. </p>
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
