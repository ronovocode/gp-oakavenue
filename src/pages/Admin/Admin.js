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

    .edit-button {
        cursor: pointer;
    }

    .edit-button:hover {
        text-decoration: underline;
        color: #d2cca1;
    }

    .card-body h5 {
        color: #d2cca1;
    }

    .card span {
        font-weight: lighter;
        color: #d2cca1;
    }

    .modal-title {
        color: #d2cca1;
    }

    .react-calendar button {
        background-color: #151C0D;
        color: #fff;
        padding: 0.7rem;
        border: 1px solid #D2cca1
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
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
                Available_Date: "08/2/20",
                Facing_Direction: "East",
                Type: "Apartment",
                Description: "Lorem ipsum placeholder text",
                Images: "View images",
                Floor_Plan: "Link to floorplan",
                Virtual_Tour: "https://my.matterport.com/",
                Smart_Home_Features: ["Smart lighting ", 
                    "Smart lock "]
            },
        ], 
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onChangeCalendar = date => this.setState({ date })

    toggleAllEdit = () => {
        window.location.reload();
    }

    render() {
        return ( 
            <Wrapper className="container">
                <h3 className="mt-5">Manage 301 Oak Avenue</h3>
                <div className="row mt-5">
                    <div className="col">
                        {this.state.properties.map((property, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{property.Property_Number}</h5>
                                        <ul>
                                            <li>Square Footage: <span>{property.Square_Footage}</span></li>
                                            <li>Number of Bedrooms: <span>{property.Number_of_Bedrooms}</span></li>
                                            <li>Number of Bathrooms: <span>{property.Number_of_Bathrooms}</span></li>
                                            <li>Office Rooms: <span>{property.Office_Rooms}</span></li>
                                            <li>Powder Room: <span>{property.Powder_Room}</span></li>
                                            <li>Washer And Dryer: <span>{property.Washer_And_Dryer}</span></li>
                                            <li>Available Date: <span>{property.Available_Date}</span></li>
                                            <li>Facing Direction: <span>{property.Facing_Direction}</span></li>
                                            <li>Type: <span>{property.Type}</span></li>
                                            <li>Description: <span>{property.Description}</span></li>

                                        </ul>
                                        <div key={index} onClick={this.modalOpenedHandler} data-toggle="modal" data-target={"#modal-" + index} className="edit-button d-block">Edit</div>
                                    </div>
                                    <div className="modal fade" id={"modal-" + index} tabindex="-1" aria-labelledby="newpropertyModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="newpropertyModalLabel">Edit Unit {property.Property_Number}</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <h4 className="mb-3">Date available</h4>
                                                <Calendar 
                                                    onChange={this.onChangeCalendar}
                                                    value={this.state.date}/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="row mt-5">
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
                </div> */}
            </Wrapper>
        )
    }
}

export default Properties