import React, { Component } from 'react'
import { signupVolunteer } from '../service/FoodService'
import './Register.css'
export class VolunteerRegister extends Component {

  getLocation () {
    var volunteer = document.getElementById('volunteer');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude;

            volunteer.innerHTML = lat;
            this.state.volunteerLocationByLatLong = lat;
        });
      } else { 
        volunteer.innerHTML = "Geolocation is not supported by this browser.";
      }
}
    constructor(props) {
      super(props)
    
      this.state = {
        volunteerName:"",
        volunteerPhoneNo:"",
        volunteerAge:"",
        volunteerLocationByLatLong:"",
        volunteerLocationByAddress:"",
        volunteerEmail:"",
        volunteerPassword:"",
        volunteerIsCareGiver:""
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

        const signupVolunteerRequest = Object.assign({}, this.state);

        signupVolunteer(signupVolunteerRequest)
        .then((response) => {
            this.props.history.push(`/login`);
        })
    }

    
  render() {
    return (
        <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Volunteer Registration Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form onSubmit={this.handleSubmit}>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                  <input type="text" name="volunteerName" placeholder="Name" value={this.state.volunteerName}  onChange={this.handleInputChange} required></input>
                </div>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
                  <input type="tel" name="volunteerPhoneNo" placeholder="Phone Number" value={this.state.volunteerPhoneNo}  onChange={this.handleInputChange} required></input>
                </div>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                  <input type="text" name="volunteerAge" placeholder="Age" value={this.state.volunteerAge}  onChange={this.handleInputChange} required></input>
                </div>

                <div class="input_field">
                  <button class="submit1" onClick={this.getLocation}><i class="fa fa-location-arrow"></i>Current Location</button>
                </div>
                <p id="volunteer" name="volunteerLocationByLatLong" value={this.state.volunteerLocationByLatLong}  onChange={this.handleInputChange}></p>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-map"></i></span>
                  <input type="text" name="volunteerLocationByAddress" placeholder="Address" value={this.state.volunteerLocationByAddress}  onChange={this.handleInputChange} required></input>
                </div>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                  <input type="email" name="volunteerEmail" placeholder="Email" value={this.state.volunteerEmail}  onChange={this.handleInputChange} required></input>
                </div>

                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="volunteerPassword" placeholder="Password" value={this.state.volunteerPassword}  onChange={this.handleInputChange} required></input>
                </div>
                
                <label for="">Support as care giver?</label>
                      <div class="input_field radio_option">
                      
                      <input type="radio" id="html" name="volunteerIsCareGiver" value="true" onChange={this.handleInputChange}></input>
                    <label for="rd1">Yes</label>
                    <input type="radio" id="html" name="volunteerIsCareGiver" value="false" onChange={this.handleInputChange}></input>
                    <label for="rd2">No</label>
                    </div> 
                   
                <input class="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VolunteerRegister