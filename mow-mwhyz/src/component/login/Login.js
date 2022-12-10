import React, { Component } from 'react'
import './Login.css';
import { login } from '../../service/Service';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

class Login extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        
    }

    render() {

        if(this.props.authenticated) {
            if(this.props.currentUser.userRole === "ADMIN"){
            return <Redirect
                to={{
                pathname: "/admin",
                state: { from: this.props.location }
            }}/>;   
            }
            else if(this.props.currentUser.userRole === "PARTNER"){
                return <Redirect
                    to={{
                    pathname: "/partner",
                    state: { from: this.props.location }
                }}/>;   
                }
                else if(this.props.currentUser.userRole === "MEMBER"){
                    return <Redirect
                        to={{
                        pathname: "/member",
                        state: { from: this.props.location }
                    }}/>;   
                    }
                    else if(this.props.currentUser.userRole === "VOLUNTEER"){
                        return <Redirect
                            to={{
                            pathname: "/volunteer",
                            state: { from: this.props.location }
                        }}/>;   
                        }
                   
        }

        // if (this.props.authenticated) {

        //     return <Redirect
        //         to={{
        //             pathname: "/",
        //             state: { from: this.props.location }

        //         }} />;
        // }

        return (

            <div class="container mt-2 mb-5">
                <div class="row">
                    <div class="col-sm-12">
                        <LoginForm {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}


class LoginForm extends Component {

    constructor(props) {

        super(props);
        this.state = {

            email: '',
            password: ''

        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {

        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({

            [inputName]: inputValue

        });
    }

    handleSubmit(event) {

        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {

            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            console.log(localStorage);
            window.location.reload(false)    

            console.log("Under local");
            
           

            if(this.props.currentUser.userRole === "ADMIN"){
                
                this.props.history.push(`/admin`);
            }
            else if(this.props.currentUser.userRole === "PARTNER"){
                this.props.history.push(`/partnerprofile`);
                console.log("You're here");
            }
            else if(this.props.currentUser.userRole === "MEMBER"){
                console.log(this.props.currentUser.memberROLE)
                this.props.history.push(`/profile`);
            }

            console.log("Profile link")
            

        }).catch(error => {

            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');

        });
    }
    render() {
        return (


            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login"  onSubmit={this.handleSubmit}>
                            <h1 class='h2'>Login </h1>
                            <div class="login__field">
                                <i class="login__icon fa fa-user"></i>
                                <input type="email" class="login__input" placeholder="Email" name='email' value={this.state.email} onChange={this.handleInputChange} maxLength="64" required
                                    title="Please provide only a Best Startup Ever corporate e-mail address"  />
                            </div>  
                            <div class="login__field">
                                <i class="login__icon fa fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password"  name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <button class="login__submit">
                                <input type="submit" value="Login" class="button__input" />
                                <i class="button__icon fa fa-arrow-right"></i>
                            </button>
                        </form>
                        <div class="social-login">
                            <h4>New User?</h4>

                            <h3><a href="/register">Register Here</a></h3>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login