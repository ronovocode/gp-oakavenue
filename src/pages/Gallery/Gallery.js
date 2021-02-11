import React, { Component } from 'react'

import styled from 'styled-components';

import API from '../../utils/API';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Wrapper = styled.div`

    
`

export default class Gallery extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        document.title = "Gallery"

        API.GET_ALL_IMAGES().then(res => {

            let bed_images = []
            let bath_images = []
            let living_images = []
            let exterior_images = []

            for(const image of res.data) {
                let current_tag = image.tag;

                if(current_tag === "2nd Bedroom" || current_tag === "Master Suite") {
                    bed_images.push(image.url);
                }

                if(current_tag === "Hallway Bathroom" || current_tag === "Master Bathroom" || current_tag === "Powder Room") {
                    bath_images.push(image.url);
                }

                if(current_tag === "Exterior") {
                    exterior_images.push(image.url);
                }

                if(current_tag === "Washer & Dryer" || current_tag === "Offices" ||
                     current_tag === "Smarthome Tech" || current_tag === "Kitchen") {
                    living_images.push(image.url);
                }
            }

            this.setState({
                bed_images: bed_images,
                bath_images: bath_images,
                living_images: living_images,
                exterior_images: exterior_images
            }, () => console.log(this.state))
        }).catch(err => console.log(err));
    }

    render() {
        const { bed_images, bath_images, living_images, exterior_images } = this.state;

        return (
            <Wrapper className="container">
                <div className="row mt-4">
                    <div className="col">
                        <Tabs>
                            <TabList>
                                <Tab>Bed</Tab>
                                <Tab>Bath</Tab>
                                <Tab>Main Floor</Tab>
                                <Tab>Outside</Tab>
                            </TabList>

                            <TabPanel>
                                {bed_images ? (
                                    <Carousel>
                                        {bed_images.map(function(img) {
                                            return (
                                                <div>
                                                    <img src={img} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                    ) : (<div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>)
                                }
                            </TabPanel>
                            <TabPanel>
                                {bath_images ? (
                                    <Carousel>
                                        {bath_images.map(function(img) {
                                            return (
                                                <div>
                                                    <img src={img} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                    ) : (<div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>)
                                }
                            </TabPanel>
                            <TabPanel>
                                {living_images ? (
                                    <Carousel>
                                        {living_images.map(function(img) {
                                            return (
                                                <div>
                                                    <img src={img} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                    ) : (<div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>)
                                }
                            </TabPanel>
                            <TabPanel>
                                {exterior_images ? (
                                    <Carousel>
                                        {exterior_images.map(function(img) {
                                            return (
                                                <div>
                                                    <img src={img} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                    ) : (<div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>)
                                }
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
