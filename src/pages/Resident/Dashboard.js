import React, { Component } from 'react'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";

import styled from 'styled-components'
import API from '../../utils/API'

const Wrapper = styled.div`
    hr {
        background-color: #fff;
    }

    .news-list {
        height: 45rem;
        overflow-y: scroll;
        margin-bottom: 5rem;
    }

    .contact p,
    .investment p{
        font-size: 1.2rem;
        vertical-align: middle;
    }
    .investment b {
        color: #D2cca1
    }

    .success {
        color: green;
    }

    .error {
        color: red;
    }

    .logout {
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    textarea:focus {
        color: #ddd;
    }

    .form-control {
        color: #efefef;
    }
`

class Dashboard extends Component {
    state = {
        toggleEdit: false,
        residentInfoSaved: false,
        name_input: "",
        cell_input: "",
        email_input: "",
        maintenance: "",
        suggestions: "",
        documents: [],
        isResident: true
    }

    onChange = e => {
        if(e.target.type === "checkbox") {
            this.setState({
                [e.target.id]: e.target.checked
            })
        } else {
            this.setState({ 
                [e.target.id]: e.target.value
            });
        }
    }

    contactSave = () => {
        let request = {}
        let {name_input, cell_input, email_input} = this.state;

        if(name_input !== "") {
            request.name = name_input
        }
        if(cell_input !== "") {
            request.cell = cell_input
        }
        if(email_input !== "") {
            request.email = email_input
        }
        API.EDIT_RESIDENT(request).then(res => {
            console.log(res.data)
            this.setState({
                residentInfoSaved: true,
                toggleEdit: false
            });
            this.componentDidMount();
        }).catch(err => {
            this.setState({
                error: err.response.data
            })
        })
    }

    sendMaintenanceRequest = () => {
        let { maintenance, unit, email, maintenanceradio } = this.state
        let request = {}
        request.unit = unit;
        request.property = "Orchard Valley Townhomes";
        request.email = email;
        request.inUnit = maintenanceradio;
        request.message = maintenance;
        
        API.SEND_MAINTENANCE_REQUEST(request).then(res => {
            this.setState({
                success: {
                    maintenance: res.data
                }
            })
        }).catch(err => {
            this.setState({
                error: {
                    maintenance: err.response.data
                }
            })
        })
    }

    componentDidMount = () => {
        API.GET_RESIDENT().then(res => {
            if(!res.data.unit) {
                this.setState({
                    isResident: false
                })
            }
            if(!res.data.name && !res.data.cell) {
                this.props.logoutUser();
            } else {
                console.log(res.data)
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    unit: res.data.unit,
                    property: res.data.unit_property,
                    cell: res.data.cell,
                    documents: res.data.documents
                })
            }
        }).catch(err => {
            console.log(err);
            this.props.logoutUser();
        })
    }

    render() {
        const { error, success } = this.state
        return (
            <Wrapper className="container">
                {this.state.isResident ? <div>
                    <h2 className="mt-5" style={{color: "#D2CCA1"}}>Welcome, {this.state.name}</h2>
                    <span className="text-muted logout" onClick={() => {this.props.logoutUser()}}>Logout</span>
                    <hr />

                    <div className="row">
                        <div className="col-md pb-4">
                            <h4>Contact Information</h4>
                            <hr />
                            {this.state.toggleEdit ? (
                                <div className="contact">
                                    <Input name="name_input" onChange={this.onChange} type="input" placeholder="Name" />
                                    <Input name="cell_input" onChange={this.onChange} type="input" placeholder="Phone number" />
                                    <Input name="email_input" onChange={this.onChange} type="input" placeholder="E-mail" />
                                    {this.state.error && <p className="error">{this.state.error}</p>}
                                </div>
                            ) : (
                                <div className="contact">
                                    <p className="investor-name">
                                        {this.state.name}
                                    </p>
                                    <p className="investor-cell">
                                        {this.state.cell}
                                    </p>
                                    <p className="investor-email">
                                        {this.state.email}
                                    </p>
                                    {this.state.investorInfoSaved && <p className="success">Saved</p>}
                                </div>
                            )}
                            {this.state.toggleEdit ? (
                                <div className="d-flex">
                                    <Button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} 
                                        text="Cancel" 
                                        className="w-50 mr-2"/>
                                    <Button onClick={() => this.contactSave()} 
                                        text="Save" 
                                        className="w-50"/>
                                </div>
                            ) : (
                                <Button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} 
                                    text="Edit Contact Info" 
                                    className="w-50"/>
                            )}
                        </div>
                        <div className="col-md">
                            <div className="investment">
                                <h4>Your home</h4>
                                <hr />
                                <p className="investor-entity-name">
                                    <b>Unit:</b> {this.state.unit}
                                </p>
                                <p className="investor-entity-type">
                                    <b>Property:</b> {this.state.property}
                                </p>
                            </div>
                        </div>
                    </div>

                    

                    <div className="row mt-5">
                        <div className="col-md-6 requests">
                            <h3 style={{color: "#D2CCA1"}}>Requests</h3>
                            <hr />
                            <div className="requests">
                            <Input name="maintenance" 
                                onChange={this.onChange}
                                className="mt-4" 
                                type="text" 
                                label="Maintenance" 
                                placeholder="Type any issues you may be having here..." />
                            <div class="form-check mt-4">
                                <input class="form-check-input" onChange={this.onChange} type="checkbox" name="maintenanceradio" id="maintenanceradio"/>
                                <label class="form-check-label" for="exampleRadios1">
                                    Would you prefer to be in unit during maintenance?
                                </label>
                            </div>
                            <Button 
                                text="Submit" 
                                className="mt-3"
                                onClick={() => this.sendMaintenanceRequest()}/>
                            {success && success.maintenance && <p className="success mt-4">{success.maintenance}</p>}
                            {error && !success && error.maintenance && <p className="error mt-4">{error.maintenance}</p>}
                            {/* <Input name="suggestions" 
                                onChange={this.onChange}
                                className="mt-4" 
                                type="text" 
                                label="Suggestions" 
                                placeholder="Any ways we could improve our residence..." />
                            <Button 
                                text="Submit" 
                                className="mt-3 mb-5"/>
                            {success && success.suggestion && <p className="success mt-4">{success.suggestion}</p>}
                            {error && !success && error.suggestion && <p className="error mt-4">{error.suggestion}</p>} */}
                            </div>
                        </div>
                    </div>
                </div> : <div>
                            <a href="/manager">Click here for the right dashboard.</a>
                        </div>}
            </Wrapper>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);