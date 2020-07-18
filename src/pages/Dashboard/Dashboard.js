import React, { Component } from 'react'

import UserIcon from '../../icons/UserIcon'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import NewsCard from '../../components/NewsCard/NewsCard'

import Navbar from '../../nav/301NAV';

import styled from 'styled-components'

const Wrapper = styled.div`
    hr {
        background-color: #fff;
    }

    .news-list {
        height: 45rem;
        overflow-y: scroll;
        margin-bottom: 5rem;
    }

    .contact p{
        font-size: 1.2rem;
    }
`

class Investor extends Component {
    state = {
        toggleEdit: false,
        firstName: "John",
        lastName: "Doe",
        cell: "6505216699",
        email: "johndoe@gmail.com",
        documents: [
            {
                url: "http://www.aws.com",
                title: "My_Application.pdf",
                type: "pdf"
            }
        ],
        news: [
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "2h ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Maintenance",
                date: "2w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Plumber",
                date: "1w ago"          
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
            {
                title: "Lorem Ipsum Dolor",
                description: "asjdh sd hjkjf jandnlk alsdknfk n nalsdk kdnf d mns",
                source: "Management",
                date: "1w ago"
            },
        ]
    }

    render() {
        return (
            <div>
                <Navbar />
                <Wrapper className="container">
                    <h2 className="mt-5" style={{color: "#D2CCA1"}}>Resident Dashboard</h2>
                    <hr />

                    <div>
                        <h4>Contact Information</h4>
                        {this.state.toggleEdit ? (
                            <div className="contact">
                                <Input type="input" placeholder={this.state.firstName + " " + this.state.lastName} />
                                <Input type="input" placeholder={this.state.cell} />
                                <Input type="input" placeholder={this.state.email} />
                            </div>
                        ) : (
                            <div className="contact">
                                <p className="investor-name">
                                    <UserIcon color="#fff" className="mr-3"/>
                                    {this.state.firstName + " " + this.state.lastName}
                                </p>
                                <p className="investor-cell">
                                    <UserIcon color="#fff" className="mr-3"/>
                                    {this.state.cell}
                                </p>
                                <p className="investor-email">
                                    <UserIcon color="#fff" className="mr-3"/>
                                    {this.state.email}
                                </p>
                            </div>
                        )}
                    </div>

                    {this.state.toggleEdit ? (
                        <div className="d-flex">
                            <Button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} 
                                text="Cancel" 
                                className="w-50 mr-2"/>
                            <Button onClick={() => this.setState({ 
                                toggleEdit: !this.state.toggleEdit
                            })} 
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
                            {this.state.documents.map((i) => {
                                    return (
                                        <a href={i.url}>
                                            <h5>{i.title}</h5>
                                        </a>
                                    )
                                })}

                        </div>
                        <div className="col-md-6 newsletter">
                            <h3 style={{color: "#D2CCA1"}}>Newsletter</h3>
                            <hr />
                            <div className="news-list">
                                {this.state.news.map((i) => {
                                    return (
                                        <NewsCard title={i.title} body={i.description} source={i.source} date={i.date}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

Investor.propTypes = {

}

export default Investor