import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom'
import { signupMember } from '../service/FoodService';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';


class MemberRegister extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
               
                    
                    <SignupForm {...this.props} />
                   
                </div>
        );
    }
}



//Local SignUp Form
class SignupForm extends Component {

    getLocation () {
        var member = document.getElementById('location');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = "Latitude: " + position.coords.latitude;
                
                var long = "<br/>Longitude: " + position.coords.longitude;

                member.innerHTML = lat + long;
                this.state.memberLocationByLatitude = position.coords.latitude;
                this.state.memberLocationByLongitude = position.coords.longitude;
            });
          } else { 
            member.innerHTML = "Geolocation is not supported by this browser.";
          }
    }

    loadFile (event) {
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
    
    
    
    //upload 
    const image_input = document.querySelector("#image-input");
    image_input.addEventListener("change", function() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    });
  };

    constructor(props) {
        super(props);
        this.state = {
        memberName : "",
        memberAge: "",
        memberPhoneNo : "",
        memberLocationByLatitude : "",
        memberLocationByLongitude:"",
        memberLocationByAddress : "",
        memberEmail: "",
        memberPassword: "",
        memberCondition : "",
        memberCondDescription : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLocation = this.getLocation.bind(this);
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

        const signupMemberRequest = Object.assign({}, this.state);

        signupMember(signupMemberRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            this.props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }

    
    render() {
        return (
            <div class="form_wrapper">
            <div class="form_container">
              <div class="title_container">
                <h2>Member Registration Form</h2>
              </div>
              <div class="row clearfix">
                <div class="">
                  <form onSubmit={this.handleSubmit}>
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="memberName"  placeholder="Name" value={this.state.memberName}  onChange={this.handleInputChange} required></input>
                    </div>
    
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                      <input type="text" name="memberAge"  placeholder="Age" value={this.state.memberAge}  onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
                      <input type="tel" name="memberPhoneNo" placeholder="Phone Number" value={this.state.memberPhoneNo}  onChange={this.handleInputChange} required></input>
                    </div>
    
                    <div class="input_field">
                      <button class="submit1" onClick={this.getLocation}><i class="fa fa-location-arrow"></i>Current Location</button>
                    </div>
                    <p id="location"  name="memberLocationByLatLong" value={this.state.memberLocationByLatLong}  onChange={this.handleInputChange}></p>
    
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-map"></i></span>
                      <input type="text" name="memberLocationByAddress" placeholder="Address" value={this.state.memberLocationByAddress}  onChange={this.handleInputChange} required></input>
                    </div>
    
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" name="memberEmail" placeholder="Email" value={this.state.memberEmail}  onChange={this.handleInputChange} required></input>
                    </div>
    
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="memberPassword" placeholder="Password" value={this.state.memberPassword}  onChange={this.handleInputChange} required></input>
                    </div>
                    
                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="text" name="memberCondition" placeholder="Condition" value={this.state.memberCondition}  onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="text" name="memberCondDescription" placeholder="Condition Description" value={this.state.memberCondDescription}  onChange={this.handleInputChange} required></input>
                    </div>


                    <input class="button" type="submit" value="Register" />
                  </form>
                </div>
              </div>
            </div>
          </div>          
        );
    }
}
export default MemberRegister