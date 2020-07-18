import React, { Component } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import API from '../../utils/API';

import Navbar from '../../nav/301NAV';

import styled  from 'styled-components'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Password from '../../icons/Password';
import Mail from '../../icons/Mail';

const LoginFormWrapper = styled.div`
    width: 70%

    .h3{
        var(--dark-accent)
    }
`

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const userData = {
            email: this.state.email
        };

        API.userLogin(userData);
    }

    render() {
        return (
            <div>
                <Navbar />
                <LoginFormWrapper className="container">
                    <Router></Router>
                    <h3 className="text-center my-5">Resident Login</h3>
                    <Input name="email" 
                        onChange={this.onChange} 
                        value={this.state.email} 
                        type="input" 
                        icon={<Mail />} 
                        label="Email" 
                        placeholder="johndoe@gmail.com" />
                    <Input name="password" 
                        value={this.state.password}
                        onChange={this.onChange} 
                        text_decoration="password" 
                        className="mt-4" 
                        type="input" 
                        icon={<Password />} 
                        label="Password" 
                        placeholder="password" />

                    <Link className="muted" to="/forgotpassword">Forgot password?</Link>

                    <Button onClick={this.onSubmit} className="mt-4" text="Submit"/>
                </LoginFormWrapper>
            </div>
        )   
    }
}

export default Login