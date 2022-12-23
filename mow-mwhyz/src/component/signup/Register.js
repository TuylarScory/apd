import React, { Component } from 'react'
import './Register.css'
import Alert from 'react-s-alert';
import { Redirect } from 'react-router-dom'


export const API_BASE_URL = 'http://localhost:8080';

class register extends Component {
  render() {
    if (this.props.authenticated) {
      return <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }} />;
    }

    return (
      <div className="signup-container">


        <Signup {...this.props} />

      </div>
    );
  }
}

class Signup extends Component {
  member() {
    var x = document.getElementById('member');
    var y = document.getElementById('partner');
    var w = document.getElementById('voluntee');
    var z = document.getElementById('btn');
    x.style.left = "3px";
    y.style.left = "600px";
    w.style.left = "920px"
    z.style.left = "0px";
  }
  partner() {
    var x = document.getElementById('member');
    var y = document.getElementById('partner');
    var w = document.getElementById('voluntee');
    var z = document.getElementById('btn');
    x.style.left = "-600px";
    y.style.left = "3px";
    w.style.left = "920px"
    z.style.left = "120px";
  }
  volunteer() {
    var x = document.getElementById('member');
    var y = document.getElementById('partner');
    var w = document.getElementById('voluntee');
    var z = document.getElementById('btn');
    x.style.left = "-920px";
    y.style.left = "-600px";
    w.style.left = "3px"
    z.style.left = "260px";
  }


  getLocation() {

    var lati = document.getElementById("lat")
    var long = document.getElementById("log")

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var log = position.coords.longitude;
        lati.innerHTML = lat
        long.innerHTML = log

        this.setState({
          partnerLocationByLatitude: lat,
          partnerLocationByLongitude: log
        })

      });
    } else {
      lati.innerHTML = "Geolocation is not supported by this browser.";
    }

  }

  getLocation1() {

    var lati1 = document.getElementById("lat1")
    var long1 = document.getElementById("log1")

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat1 = position.coords.latitude;
        var log1 = position.coords.longitude;
        lati1.innerHTML = lat1
        long1.innerHTML = log1

        this.setState({
          volunteerLocationByLatitude: lat1,
          volunteerLocationByLongitude: log1
        })

      });
    } else {
      lati1.innerHTML = "Geolocation is not supported by this browser.";
    }

  }

  getLocation2() {

    var lati2 = document.getElementById("lat2")
    var long2 = document.getElementById("log2")

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat2 = position.coords.latitude;
        var log2 = position.coords.longitude;
        lati2.innerHTML = lat2
        long2.innerHTML = log2

        this.setState({
          memberLocationByLatitude: lat2,
          memberLocationByLongitude: log2
        })

      });
    } else {
      lati2.innerHTML = "Geolocation is not supported by this browser.";
    }

  }

  fileSelectedHandler = event => {

    var preview = document.getElementById('img_output');

    preview.src = URL.createObjectURL(event.target.files[0])
    var img_file = event.target.files[0]

    this.setState({
      imagePath: img_file,
      profileImage: img_file,
      name: img_file["name"],
      type: img_file["type"],
    })

  }


  constructor(props) {

    super(props);

    this.state = {

      partnerName: '',
      partnerPhoneNo: '',
      partnerLocationByLatitude: '',
      partnerLocationByLongitude: '',
      partnerLocationByAddress: '',
      email: '',
      partnerPassword: '',
      volunteerName: "",
      volunteerPhoneNo: "",
      volunteerAge: "",
      volunteerLocationByLatitude: "",
      volunteerLocationByLongitude: "",
      volunteerLocationByAddress: "",
      volunteerPassword: "",
      volunteerIsCareGiver: "",
      memberName: "",
      memberAge: "",
      memberPhoneNo: "",
      memberLocationByLatitude: "",
      memberLocationByLongitude: "",
      memberLocationByAddress: "",
      memberPassword: "",
      memberCondition: "",
      memberCondDescription: "",
      profileImage: "",
      image_preview: "",
      name: "",
      imagePath: "",
      type: ""
    }


    this.getLocation = this.getLocation.bind(this);
    this.getLocation1 = this.getLocation1.bind(this);
    this.getLocation2 = this.getLocation2.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange1 = this.handleInputChange1.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);

  }

  handleInputChange(event) {



    const target = event.target;
    const partner = target.name;
    const inputValue = target.value;

    this.setState({

      [partner]: inputValue,

    });

  }

  handleInputChange1(e) {



    const target = e.target;
    const volunteer = target.name;
    const inputValue1 = target.value;

    this.setState({

      [volunteer]: inputValue1

    });



  }

  handleInputChange2(e) {

    const target = e.target;
    const member = target.name;
    const inputValue2 = target.value;

    this.setState({

      [member]: inputValue2

    });



  }

  handleSubmit(event) {
    event.preventDefault();

    var partnerData = {
      partnerName: this.state.partnerName,
      partnerPhoneNo: this.state.partnerPhoneNo,
      partnerLocationByLatitude: this.state.partnerLocationByLatitude,
      partnerLocationByLongitude: this.state.partnerLocationByLongitude,
      partnerLocationByAddress: this.state.partnerLocationByAddress,
      email: this.state.email,
      partnerPassword: this.state.partnerPassword,
    }
    var fileData = {
      name: this.state.name,
      imagePath: this.state.imagePath,
      type: this.state.type
    }
    var formData = new FormData()
    let partner = Object.assign({}, partnerData)
    let files = this.state.profileImage
    console.log(files);
    formData.append('user', JSON.stringify(partner));  //should be user in next version 2
    formData.append('file', files)
    formData.append('name', fileData.name)
    formData.append('type', fileData.type)

    fetch(API_BASE_URL + '/merry/register/partner', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(response => {

        Alert.success("You're successfully registered. Please login to continue!");
        this.props.history.push("/thanku");

      }).catch(error => {

        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');

      });
  }

  handleSubmit1(event) {
    event.preventDefault();

    var volunteerData = {
      volunteerName: this.state.volunteerName,
      volunteerPhoneNo: this.state.volunteerPhoneNo,
      volunteerAge: this.state.volunteerAge,
      volunteerIsCareGiver: this.state.volunteerIsCareGiver,
      volunteerLocationByAddress: this.state.volunteerLocationByAddress,
      volunteerLocationByLongitude: this.state.volunteerLocationByLongitude,
      volunteerLocationByLatitude: this.state.volunteerLocationByLatitude,
      email: this.state.email,
      volunteerPassword: this.state.volunteerPassword
    }
    var fileData = {
      name: this.state.name,
      imagePath: this.state.imagePath,
      type: this.state.type
    }
    var formData = new FormData()
    let volunteer = Object.assign({}, volunteerData)
    let files = this.state.profileImage
    console.log(files);
    formData.append('user', JSON.stringify(volunteer));
    formData.append('file', files)
    formData.append('name', fileData.name)
    formData.append('type', fileData.type)

    console.log(volunteer);
    fetch(API_BASE_URL + '/merry/register/volunteer', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(response => {

        Alert.success("You're successfully registered. Please login to continue!");
        this.props.history.push("/thanku");

      }).catch(error => {

        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');

      });
  }

  handleSubmit2(event) {
    event.preventDefault();

    var memberData = {
      memberName: this.state.memberName,
      memberPhoneNo: this.state.memberPhoneNo,
      memberAge: this.state.memberAge,
      memberLocationByLatitude: this.state.memberLocationByLatitude,
      memberLocationByLongitude: this.state.memberLocationByLongitude,
      memberLocationByAddress: this.state.memberLocationByAddress,
      email: this.state.email,
      memberPassword: this.state.memberPassword,
      memberCondition: this.state.memberCondition,
      memberCondDescription: this.state.memberCondDescription

    }
    console.log(memberData);
    var fileData = {
      name: this.state.name,
      imagePath: this.state.imagePath,
      type: this.state.type
    }
    var formData = new FormData()
    let member = Object.assign({}, memberData)
    let files = this.state.profileImage
    console.log(files);
    formData.append('user', JSON.stringify(member));
    formData.append('file', files)
    formData.append('name', fileData.name)
    formData.append('type', fileData.type)

    fetch(API_BASE_URL + '/merry/register/member', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(response => {

        Alert.success("You're successfully registered. Please login to continue!");
        this.props.history.push("/thanku");

      }).catch(error => {

        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');

      });
  }



  render() {
    return (
      <div className="form-box">
        <div class="title_container">
          <h2 id='register_h2'>Registration Form</h2>
        </div>
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={this.member}>Member</button>
          <button type="button" className="toggle-btn" onClick={this.partner}>Partner</button>
          <button type="button" className="toggle-btn" onClick={this.volunteer}>Volunteer</button>

        </div>
        <div class="image_box">
          <h3 class="image_text">Please only upload photo under 1Mb!!!</h3>
          <div class="input_field " id="for_image">
            <p><input type="file" accept="/" id="file" style={{ display: "none" }} name="profileImage" onChange={this.fileSelectedHandler} /></p>
            <p><label for="file" class="img_label">Upload Profile</label></p>
            <img id="img_output" />
          </div>
        </div>
        <div className='input-group' id='member'>
          <div class="form_wrapper" >
            <div class="form_container">

              <div class="row clearfix">
                <div class="">
                  <form onSubmit={this.handleSubmit2}>
                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="memberName" placeholder="Name" maxLength="64" value={this.state.memberName} onChange={this.handleInputChange2} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-phone"></i></span>
                      <input type="tel" name="memberPhoneNo" placeholder="Phone Number" maxLength="64" value={this.state.memberPhoneNo} onChange={this.handleInputChange2} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-calendar"></i></span>
                      <input type="text" name="memberAge" placeholder="Age" value={this.state.memberAge} onChange={this.handleInputChange2} required></input>
                    </div>

                    <div class="input_field" id="latlong">
                      <button class="submit1" onClick={this.getLocation2}><i class="fa fa-location-arrow"></i>Current Location</button>
                      <p id="lat2" name="memberLocationByLatitude" value={this.state.memberLocationByLatitude} onChange={this.handleInputChange2}>Latitude</p>
                      <p id="log2" name="memberLocationByLongitude" value={this.state.memberLocationByLongitude} onChange={this.handleInputChange2}>Longtitude</p>
                    </div>
                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-map"></i></span>
                      <input type="text" name="memberLocationByAddress" placeholder="Address" value={this.state.memberLocationByAddress} onChange={this.handleInputChange2} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" name="email" placeholder="Email" maxLength="64" value={this.state.email} onChange={this.handleInputChange2} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="memberPassword" placeholder="Password" value={this.state.memberPassword} onChange={this.handleInputChange2} minlength="8" required></input>
                    </div>

                    <div class="input_field">
                      {/* <input type="text" name="memberCondition" placeholder="Illness / Disability" value={this.state.memberCondition} onChange={this.handleInputChange2} required></input> */}
                      <label for="" id='radio-label'>Member Condition</label>
                      <div class="input_field radio_option">

                        <input type="radio" id="disability" name="memberCondition" value="disability" onChange={this.handleInputChange2} required /> Disability
                        <input type="radio" id="illness" name="memberCondition" value="illness" onChange={this.handleInputChange2} required /> Illness
                      </div>
                    </div>




                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-warning"></i></span>
                      <input type="text" id="conditionDescription" placeholder='Condition Description' name="memberCondDescription" required
                        value={this.state.memberCondDescription} onChange={this.handleInputChange2}></input>

                    </div>

                    <input className="button" type="submit" onClick={this.checkButton} value="Register" />

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='input-group' id='partner'>
          <div class="form_wrapper" >
            <div class="form_container">

              <div class="row clearfix">
                <div class="">
                  <form onSubmit={this.handleSubmit}>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="partnerName" placeholder="Name" maxLength="64" value={this.state.partnerName} onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-phone"></i></span>
                      <input type="tel" name="partnerPhoneNo" placeholder="Phone Number" maxLength="64" value={this.state.partnerPhoneNo} onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field" id="latlong">
                      <button class="submit1" onClick={this.getLocation}><i class="fa fa-location-arrow"></i>Current Location</button>
                      <p id="lat" name="partnerLocationByLatitude" value={this.state.partnerLocationByLatitude} onChange={this.handleInputChange}>Latitude</p>
                      <p id="log" name="partnerLocationByLongitude" value={this.state.partnerLocationByLongitude} onChange={this.handleInputChange}>Longtitude</p>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-map"></i></span>
                      <input type="text" name="partnerLocationByAddress" placeholder="Address" value={this.state.partnerLocationByAddress} onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" name="email" placeholder="Email" maxLength="64" value={this.state.email} onChange={this.handleInputChange} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="partnerPassword" placeholder="Password" minlength="8" value={this.state.partnerPassword} onChange={this.handleInputChange} required></input>
                    </div>

                    <input class="button" type="submit" value="Register" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='input-group' id='voluntee'>
          <div class="form_wrapper" >
            <div class="form_container">

              <div class="row clearfix">
                <div class="">
                  <form onSubmit={this.handleSubmit1}>
                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="volunteerName" placeholder="Name" maxLength="64" value={this.state.volunteerName} onChange={this.handleInputChange1} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-phone"></i></span>
                      <input type="tel" name="volunteerPhoneNo" placeholder="Phone Number" maxLength="64" value={this.state.volunteerPhoneNo} onChange={this.handleInputChange1} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-calendar"></i></span>
                      <input type="text" name="volunteerAge" placeholder="Age" value={this.state.volunteerAge} onChange={this.handleInputChange1} required></input>
                    </div>

                    <div class="input_field" id="latlong">
                      <button class="submit1" onClick={this.getLocation1}><i class="fa fa-location-arrow"></i>Current Location</button>
                      <p id="lat1" name="volunteerLocationByLatitude" value={this.state.volunteerLocationByLatitude} onChange={this.handleInputChange1}>Latitude</p>
                      <p id="log1" name="volunteerLocationByLongitude" value={this.state.volunteerLocationByLongitude} onChange={this.handleInputChange1}>Longtitude</p>
                    </div>
                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-map"></i></span>
                      <input type="text" name="volunteerLocationByAddress" placeholder="Address" value={this.state.volunteerLocationByAddress} onChange={this.handleInputChange1} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" name="email" placeholder="Email" maxLength="64" value={this.state.email} onChange={this.handleInputChange1} required></input>
                    </div>

                    <div class="input_field"> <span class="register-span"><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password" name="volunteerPassword" placeholder="Password" minlength="8" value={this.state.volunteerPassword} onChange={this.handleInputChange1} required></input>
                    </div>


                    <label for="" id='radio-label'>Support as care giver?</label>
                    <div class="input_field radio_option">

                      <input type="radio" name="volunteerIsCareGiver" value="true" onChange={this.handleInputChange1} /> Yes
                      <input type="radio" name="volunteerIsCareGiver" value="false" onChange={this.handleInputChange1} /> No
                    </div>

                    <input class="button" type="submit" value="Register" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default register