import React, { Component } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'

import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import PropTypes from "prop-types";

import Table from '../../components/Table/Table';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import API from '../../utils/API';


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
    .react-calendar abbr {
        color: #989898;
    }

    span.delete{
        font-size: 1.2rem;
        :hover {
            cursor: pointer;
        }
    }

    .logout {
        color: #D2CCA1;
        transition-duration: 0.5s;
        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

class Manager extends Component {
    state = {
        selectedResident: "",
        selectedApartment: "",
        edit_date: "",
        edit_price: "",
        add_name: "",
        add_cell: "",
        add_email: "",
        currentFile: "Choose file...",
        apartments: [],
        residents_response: [],
        residents: [],
        isManager: true,
        errors: {}
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onChangeCalendar = date => {
        this.setState({
            edit_date: date.toLocaleDateString("en-US")
        })
    }

    componentDidMount = () => {
        API.GET_ALL_APARTMENTS("Oak Avenue").then(res => {
            this.setState({
                apartments: res.data
            })
        }).catch(err => console.log(err));

        API.GET_ALL_RESIDENTS("Oak Avenue").then(res => {
            this.setState({
                residents: res.data
            })
        }).catch(err => {
            if(err.response.status === 401) {
                this.setState({
                    isManager: false
                })
            }
        });
    }

    onApartmentSave = () => {
        let request = {}
        let {edit_date, edit_price } = this.state;

        if(edit_date != "") {
            request.available_date = edit_date
        }

        if(edit_price != "") {
            request.price = edit_price
        }

        API.EDIT_APARTMENT(this.state.selectedApartment, request).then(res => {
            this.componentDidMount()
        }).catch(err => {
            this.setState({
                error: err.response.data
            }).then(window.location.reload())
        })
    }

    createResident = () => {
        let { add_name, add_cell, add_email, selectedApartment } = this.state;
        API.CREATE_RESIDENT({
            name: add_name,
            cell: add_cell,
            email: add_email,
            unit: selectedApartment,
            unit_property: "Oak Avenue",
            type: "resident"
        }).then(res => {
            this.componentDidMount()
        })
    }

    deleteResident = (e) => {
        let selected = e.target.getAttribute("data-delete");
        
        API.DELETE_RESIDENT({
            email: selected
        }).then(res => {
            console.log(res)
            this.componentDidMount();
        }).catch(err => console.log(err))
    }

    modalOpenedHandler = event => {
        let selected = event.target.getAttribute("data-identifier");
        let index = event.target.getAttribute("data-index");

        if(selected[0] === "r") {
            this.setState({
                selectedResident: selected.substring(1),
                selectedIndex: index
            })
        }

        if(selected[0] === "p") {
            this.setState({
                selectedApartment: selected.substring(1),
                selectedIndex: index
            })
        }
        
    }

    render() {
        const { apartments, residents, isManager, selectedIndex } = this.state;

        return ( 
            <Wrapper className="container">
                <div className="row mt-5">
                    {isManager &&   <div className="col-md">
                                        <span className="logout">WELCOME, Oak Avenue Manager</span>
                                    </div>
                    }
                    <div className="col-md align-items-end">
                        <span className="logout d-inline-flex" onClick={() => this.props.logoutUser()}>LOGOUT</span>
                    </div>
                </div>
                {isManager ? <div className="row mt-5">
                    <div className="col-md mb-5">
                        <h3 className="mb-5">Manage Oak Avenue</h3>
                        {apartments.length > 0 ? apartments.map((property, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Unit: {property.unit}</h5>
                                        <div className="row">
                                            <div className="col">
                                                <span>Available Date:</span>
                                                {property.available_date ? <p>{property.available_date}</p> : <p className="text-muted">No date set</p>}
                                            </div>
                                            <div className="col">
                                                <span>Price per month:</span>
                                                {property.price ? <p>${property.price}</p> : <p className="text-muted">No price set</p>}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div data-identifier={"p" + property.unit} 
                                                key={index} 
                                                onClick={this.modalOpenedHandler} 
                                                data-toggle="modal" 
                                                data-index={index}
                                                data-target="#modal-edit" 
                                                className="edit-button d-block">Edit</div>
                                            </div>                                         
                                            <div className="col">
                                                <div data-identifier={"p" + property.unit} 
                                                key={index} 
                                                onClick={this.modalOpenedHandler} 
                                                data-toggle="modal" 
                                                data-index={index}
                                                data-target="#modal-add"
                                                className="edit-button d-block">Add Resident</div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <p className="text-muted">No properties</p>}
                    </div>
                    <div className="modal fade" id="modal-add" tabindex="-1" aria-labelledby="newpropertyModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="mb-3 modal-title">Add Resident for Unit: {selectedIndex && this.state.apartments[selectedIndex].unit}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Input name="add_name" onChange={this.onChange} className="mt-2" label="Name" placeholder="First (M) Last" type="input"></Input>
                                    <Input name="add_email" onChange={this.onChange} className="mt-2" label="Email" placeholder="username@mail.com" type="input"></Input>
                                    <Input name="add_cell" onChange={this.onChange} className="mt-2" label="Cell" placeholder="6505216699" text_decoration="number" type="input"></Input>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.createResident()} className="btn btn-primary" data-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="modal-edit" tabindex="-1" aria-labelledby="newpropertyModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="newpropertyModalLabel">Edit Unit</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="mb-3">Date Available</h5>
                                    <Calendar 
                                        onChange={this.onChangeCalendar}
                                        value={this.state.edit_date}/>
                                    {this.state.edit_date && <p className="mt-4">{this.state.edit_date} selected</p>}
                                    <Input name="edit_price" onChange={this.onChange} className="mt-2" label="Price per month" placeholder="$1120" type="input"></Input>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.onApartmentSave()} className="btn btn-primary" data-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md mb-5">
                        <h3 className="mb-5">Manage Residents</h3>
                        {residents.length > 0? residents.map((resident, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title">{resident.name}</h5>
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <span className="delete" data-delete={resident.email} onClick={this.deleteResident} aria-hidden="true">&times;</span>
                                            </div>
                                        </div>
                                        <h6 className="card-subtitle mb-2 text-muted">from Unit: {resident.unit}</h6>
                                        <ul>
                                            <li>Email: <span>{resident.email}</span></li>
                                            <li>Cell: <span>{resident.cell}</span></li>
                                            <li>Documents
                                                {resident.documents.length > 0 ? 
                                                    <ul>
                                                        {resident.documents.map(document => {
                                                            console.log(document)
                                                            return (
                                                                <li>
                                                                    <a href={document.url}>{document.title}</a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul> : <p className="text-muted">No documents yet</p>
                                                }
                                            </li>
                                        </ul>
                                        <div data-identifier={"r" + resident.email} onClick={this.modalOpenedHandler} data-toggle="modal" data-target={"#modal2-" + index} className="edit-button d-block">Edit</div>
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
                                                    <Input label="Unit" type="input" placeholder={resident.unit}></Input>
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
                        }) : <p className="text-muted">No residents</p>}
                    </div>
                </div> : <p className="text-muted mt-5">You are unauthorized</p>}
            </Wrapper>
        )
    }
}

Manager.propTypes = {
    logputUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Manager);
