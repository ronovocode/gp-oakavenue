import React, { Component } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'

import Table from '../../components/Table/Table';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const Wrapper = styled.div`
    hr {
        background-color: #eee;
    }

    input  {
        background-color: transparent;
        border-radius: 0;
        border: 1px solid #aaa;
        padding: 0.2rem 0.4rem;
        color: #ddd;
        font-size: 0.8rem;
    }

    input:focus {
        background-color: transparent;
        border-bottom: 1px solid #aaa;
        box-shadow: none;
    }
`

class Properties extends Component {
    state = {
        properties: [
            {
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#222",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 920,
                Number_of_Bedrooms: 3,
                Number_of_Bathrooms: 4,
                Office_Rooms: 0,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#223",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "No",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#224",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#222",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 920,
                Number_of_Bedrooms: 3,
                Number_of_Bathrooms: 4,
                Office_Rooms: 0,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#223",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "No",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#224",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
            {
                Property_Number: "#221",
                Thumbnail: "http://source.unsplash.com/random/600x600",
                Square_Footage: 890,
                Number_of_Bedrooms: 2,
                Number_of_Bathrooms: 2,
                Office_Rooms: 1,
                Powder_Room: "Yes",
                Washer_And_Dryer: "Common",
                Available_Date: <Calendar />,
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "See more...",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
        ]
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    toggleAllEdit = () => {
        window.location.reload();
    }

    render() {
        return ( 
            <Wrapper className="container">
                <h3 className="mt-5">Manage 301 Oak Avenue</h3>
                <div className="row mt-5">
                    <div className="col available">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Available Properties</h5>
                                <p className="text-muted">Click on any row to edit</p>
                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <Button onClick={this.toggleAllEdit} text="Save"/>
                            </div>  
                        </div>
                        <Table closeRows={this.toggleAllEdit} list={this.state.properties}/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h5>Add New Property</h5>
                        <hr />
                        {Object.entries(this.state.properties[0]).map((keyVal, index) => {
                            let titleWithWhitespace = keyVal[0].replace(/_/g, " ");

                            return(
                                <Input key={index} type="input" label={titleWithWhitespace} placeholder={keyVal[1]}/>
                            )
                        })}
                        <Button text="Add Property" />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Properties