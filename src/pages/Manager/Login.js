import React, { Component } from 'react'

import styled  from 'styled-components'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Password from '../../icons/Password';
import Mail from '../../icons/Mail';

import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

import PropTypes from "prop-types";

const LoginFormWrapper = styled.form`
    width: 70%

    .h3{
        var(--dark-accent)
    }

    .error {
        color: red;
    }
`

const LoadingSpinner = function() {
    return (
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
    
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/manager");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/manager");
        }

        if (nextProps.errors) {
            this.setState({
                isLoading: false,
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password,
            type: "manager"
        };

        this.setState({
            isLoading: true
        });
        this.props.loginUser(userData);
    }

    render() {
        const {errors} = this.state;

        return (
            <LoginFormWrapper onSubmit={this.onSubmit} className="container">
                <h3 className="text-center my-5">Manager Login</h3>
                <Input name="email" 
                    onChange={this.onChange}
                    type="input" 
                    icon={<Mail />} 
                    label="Email" 
                    placeholder="johndoe@gmail.com" />
                {errors && errors.emailnotfound && <span className="error">{errors.emailnotfound}</span>}
                <Input name="password" 
                    onChange={this.onChange}
                    text_decoration="password" 
                    className="mt-4" 
                    type="input" 
                    icon={<Password />} 
                    label="Password" 
                    placeholder="password" />
                {errors && errors.unauthorized && <span className="error">{errors.unauthorized}</span>}
                {errors && errors.passwordincorrect && <span className="error">{errors.passwordincorrect}</span>}

                {this.state.isLoading ? (
                    <Button
                        className="mt-4" 
                        text={<LoadingSpinner />}
                        type="submit"
                    />
                 ) : (
                    <Button
                        className="mt-4" 
                        text="Submit"
                        type="submit"
                    />
                 )
                }
            </LoginFormWrapper>
        )
    }
  };

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
