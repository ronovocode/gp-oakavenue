import React, { Component } from 'react'
import styled  from 'styled-components'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
// import Password from '../../icons/Password';
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
        console.log(this.state);

    }

    render() {
        return (
            <LoginFormWrapper className="container">
                <h3 className="text-center my-5">Forgot Password</h3>
                <Input name="email" 
                    onChange={this.onChange} 
                    value={this.state.email} 
                    type="input" 
                    icon={<Mail />} 
                    label="Email" 
                    placeholder="johndoe@gmail.com" />

                <Button onClick={this.onSubmit} className="mt-4" text="Submit"/>
            </LoginFormWrapper>
        )   
    }
}

export default Login