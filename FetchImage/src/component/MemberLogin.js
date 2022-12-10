import React, { Component } from 'react';
import './MemberLogin.css';
import { login } from '../service/FoodService';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';
export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';


class MemberLogin extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    
    render() {
        if(this.props.authenticated) {
            if(this.props.currentUser.adminROLE === "ADMIN"){
            return <Redirect
                to={{
                pathname: "/admin",
                state: { from: this.props.location }
            }}/>;   
            }
            else if(this.props.currentUser.partnerRole === "PARTNER"){
                return <Redirect
                    to={{
                    pathname: "/partnerprofile",
                    state: { from: this.props.location }
                }}/>;   
                }
                else if(this.props.currentUser.memberROLE === "MEMBER"){
                    return <Redirect
                        to={{
                        pathname: "/memberHome",
                        state: { from: this.props.location }
                    }}/>;   
                    }
            // else{
            //     return <Redirect
            //     to={{
            //     pathname: "/profile",
            //     state: { from: this.props.location }
            // }}/>;     
            // }         
        }

        return (
            <div className="login-container">
                <div className="login-content">
              
                    <LoginForm {...this.props} />
                   
                </div>
            </div>
        );
    }
}


//Local LoginForm
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
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);
        console.log(loginRequest)
      
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            console.log(this.props.currentUser)
            if(this.props.currentUser.userRole === "ADMIN"){
                this.props.history.push(`/admin`);
            }
            else if(this.props.currentUser.partnerRole === "PARTNER"){
                this.props.history.push(`/partnerprofile`);
            }
            else if(this.props.currentUser.memberROLE === "MEMBER"){
                console.log(this.props.currentUser.memberROLE)
                this.props.history.push(`/memberHome`);
            }
           
        })
    }
    
    render() {
        return (
            <div class="middle">
            <h3>Login Form</h3>
            <div class="loginform">
                <div class="login-inside">
                    <form onSubmit={this.handleSubmit}>
                        <div class="emailBox">
                            <label for="email-address">Email</label><br/>
                              <div class="input-box">
                                  <input
                                  id="emailAddress" type="email" name="email" maxlength="64"
                                  required
                                  title="Please provide only a Best Startup Ever corporate e-mail address" value={this.state.email} onChange={this.handleInputChange}>
                                  </input>
                              </div>
                        </div>
                        
                            <label for="pswrd">Password:</label>
                            <input type="password" id="pwd" name="password"  value={this.state.password} onChange={this.handleInputChange} ></input><br/><br/>
                            <button type="submit" id="sbtlogin" value="Login">Login</button>
                    </form>
                     <div>
                        <p>If you don't have account, please register here
                            <a href="/register">Registration</a>
                        </p>    
                     </div>
                </div>
            
            </div>
            </div>
        )
    }
}

export default MemberLogin
