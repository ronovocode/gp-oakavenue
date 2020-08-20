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
import { apartments } from '../../static/data';


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
        selectedInvestor: "",
        currentFile: "Choose file...",
        apartments: [],
        residents: []
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onChangeCalendar = date => this.setState({ date })

    componentDidMount = () => {
        API.GET_ALL_APARTMENTS("Oak Avenue").then(res => {
            this.setState({
                apartments: res.data
            })
        }).catch(err => console.log(err));

        API.GET_ALL_RESIDENTS("Oak Avenue").then(res => {
            console.log(res.data)
            this.setState({
                residents: res.data
            })
        }).catch(err => console.log(err));

    }

    modalOpenedHandler = event => {
        console.log(event.target.key)
    }

    render() {
        const { apartments, residents } = this.state;

        return ( 
            <Wrapper className="container">
                <div className="row mt-5">
                    <div className="col-md">
                        <span className="logout" onClick={() => this.props.logoutUser()}>LOGOUT</span>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md">
                        <h3 className="mb-5">Manage Oak Avenue</h3>
                        {apartments.length > 0 ? apartments.map((property, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="card-title">Unit: {property.unit}</h5>
                                        <div>
                                            <span>Available Date:</span>
                                            {property.available_date ? <p>{property.available_date}</p> : <p className="text-muted">No date set</p>}
                                        </div>
                                        
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
                        }) : <p className="text-muted">No properties</p>}
                    </div>
                    <div className="col-md">
                        <h3 className="mb-5">Manage Residents</h3>
                        {residents.length > 0? residents.map((resident, index) => {
                            return(
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{resident.name}</h5>
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
                        }) : <p className="text-muted">No residents</p>}
                    </div>
                </div>
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
