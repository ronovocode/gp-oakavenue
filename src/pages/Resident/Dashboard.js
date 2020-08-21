import React, { Component } from 'react'

import UserIcon from '../../icons/UserIcon'
import Phone from '../../icons/Phone'
import Mail from '../../icons/Mail'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
// import NewsCard from '../../components/NewsCard/NewsCard'

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

    .logout {
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

class Dashboard extends Component {
    state = {
        toggleEdit: false,
        investorInfoSaved: false,
        name_input: "",
        cell_input: "",
        email_input: "",
        documents: []
    }

    onChangeContact = e => {
        this.setState({ 
            [e.target.id]: e.target.value
        });
    }

    contactSave = () => {
        let request = {}
        let {name_input, cell_input, email_input} = this.state;

        if(name_input != "") {
            request.name = name_input
        }
        if(cell_input != "") {
            request.cell = cell_input
        }
        if(email_input != "") {
            request.email = email_input
        }
        API.EDIT_RESIDENT(request).then(res => {
            this.setState({
                investorInfoSaved: true,
                toggleEdit: false
            });
        }).catch(err => {
            this.setState({
                error: err.response.data
            })
        })
    }

    componentDidMount = () => {
        API.GET_RESIDENT().then(res => {
            if(!res.data.name && !res.data.cell) {
                this.props.logoutUser();
            } else {
                console.log(res.data)
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    unit: res.data.unit,
                    property: res.data.property,
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
        return (
            <Wrapper className="container">
                <h2 className="mt-5" style={{color: "#D2CCA1"}}>Welcome, {this.state.name}</h2>
                <span className="text-muted logout" onClick={() => {this.props.logoutUser()}}>Logout</span>
                <hr />

                <div className="row">
                    <div className="col-md">
                        <h4>Contact Information</h4>
                        <hr />
                        {this.state.toggleEdit ? (
                            <div className="contact">
                                <Input name="name_input" onChange={this.onChangeContact} type="input" placeholder="Name" />
                                <Input name="cell_input" onChange={this.onChangeContact} type="input" placeholder="Phone number" />
                                <Input name="email_input" onChange={this.onChangeContact} type="input" placeholder="E-mail" />
                                {this.state.investorInfoSaved && <p className="success">Saved</p>}
                                {this.state.error && <p className="success">{this.state.error}</p>}
                            </div>
                        ) : (
                            <div className="contact">
                                <p className="investor-name">
                                    {/* <UserIcon color="#D2CCA1" className="mr-3"/> */}
                                    {this.state.name}
                                </p>
                                <p className="investor-cell">
                                    {/* <Phone color="#D2CCA1" className="mr-3"/> */}
                                    {this.state.cell}
                                </p>
                                <p className="investor-email">
                                    {/* <Mail color="#D2CCA1" className="mr-5"/> */}
                                    {this.state.email}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="col-md">
                        <div className="investment">
                            <h4>Your home info</h4>
                            <hr />
                            <p className="investor-entity-name">
                                {/* <UserIcon color="#fff" className="mr-3"/> */}
                                <b>Unit:</b> {this.state.unit}
                            </p>
                            <p className="investor-entity-type">
                                {/* <Phone color="#fff" className="mr-3"/> */}
                                <b>Type:</b> {this.state.entity_type}
                            </p>
                        </div>
                    </div>
                </div>

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

                <div className="row mt-5">
                <div className="col-md-6 documents">
                        <h3 style={{color: "#D2CCA1"}}>Documents</h3>
                        <hr />
                        {this.state.documents.length > 0 ?this.state.documents.map((i) => {
                                return (
                                    <a href={i.url}>
                                        <h5>{i.title}</h5>
                                    </a>
                                )
                            }) : <p className="text-muted">No documents yet</p>}

                </div>
                <div className="col-md-6 requests">
                        <h3 style={{color: "#D2CCA1"}}>Requests</h3>
                        <hr />
                        <div className="requests">
                        <Input name="suggestions" 
                            onChange={this.onChange}
                            className="mt-4" 
                            type="text" 
                            label="Suggestions" 
                            placeholder="Any ways we could improve our residence..." />
                        <Button 
                            text="Submit" 
                            className="mt-3 mb-5"/>
                        <Input name="maintenance" 
                            onChange={this.onChange}
                            className="mt-4" 
                            type="text" 
                            label="Maintenance" 
                            placeholder="Type any issues you may be having here..." />
                        <Button 
                            text="Submit" 
                            className="mt-3"/>
                        </div>
                    </div>
                </div>
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