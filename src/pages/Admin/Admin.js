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
        selectedInvestor: "",
        currentFile: "Choose file...",
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
        residents: [
            {
                Unit: "#221",
                First_Name: "Ronak",
                Middle_Name: "S",
                Last_Name: "Patel",
                Email: "ronak0624@gmail.com",
                Cell: "6505216699",
                Documents: [
                    {
                        name: "SEC_Filing.pdf",
                        url: "http://www.google.com/"
                    },
                    {
                        name: "SEC_Filing2.pdf",
                        url: "http://www.google.com/"
                    },
                    {
                        name: "SEC_Filing3.pdf",
                        url: "http://www.google.com/"
                    }
                ]
            }
        ]   
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onChangeCalendar = date => this.setState({ date })

    toggleAllEdit = () => {
        window.location.reload();
    }

    onChangeHandler = event => {
        console.log(event.target.files[0]);

        this.setState({
            currentFile: event.target.files[0].name
        });
    }

    modalOpenedHandler = event => {
        console.log(event.target.key)
    }

    render() {
        return ( 
            <Wrapper className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h3 className="mb-5">Manage 301 Oak Avenue</h3>
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
                                                <h4 className="mb-3">Date Available</h4>
                                                <Calendar 
                                                    onChange={this.onChangeCalendar}
                                                    value={this.state.date}/>
                                                <Input className="mt-4" label="Price per month" placeholder="$1120" type="input"></Input>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col">
                        <h3 className="mb-5">Manage Residents</h3>
                        {this.state.residents.map((resident, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{resident.First_Name + " " + resident.Middle_Name + " " + resident.Last_Name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">from {resident.Unit}</h6>
                                        <ul>
                                            <li>Email: <span>{resident.Email}</span></li>
                                            <li>Phone: <span>{resident.Cell}</span></li>
                                            <li>Documents
                                                <ul>
                                                    {resident.Documents.map(document => {
                                                        return (
                                                            <li>
                                                                <a href={document.url}>{document.name}</a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                        <div key={index} onClick={this.modalOpenedHandler} data-toggle="modal" data-target={"#modal2-" + index} className="edit-button d-block">Edit</div>
                                    </div>
                                    <div className="modal fade" id={"modal2-" + index} tabindex="-1" aria-labelledby="newresidentModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="newresidentModalLabel">Edit {resident.PropertyUnderManagement}</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <Input label="Unit" type="input" placeholder={resident.Unit}></Input>
                                                    <Input label="First Name" type="input" placeholder={resident.First_Name}></Input>
                                                    <Input label="Middle Name" type="input" placeholder={resident.Middle_Name}></Input>
                                                    <Input label="Last Name" type="input" placeholder={resident.Last_Name}></Input>
                                                    <Input label="Phone" type="input" placeholder={resident.Cell}></Input>
                                                    <Input label="Email" type="input" placeholder={resident.Email}></Input>

                                                    <div class="custom-file">
                                                        <input onChange={this.onChangeHandler} type="file" class="custom-file-input" id="customFile" />
                                                        <label class="custom-file-label" for="customFile">{this.state.currentFile}</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Properties