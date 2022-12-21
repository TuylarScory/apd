import React, { Component } from 'react'
import './Profile.css'

export class VolunteerProfile extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  goBack = () => {
    this.props.history.push(`/volunteer`)
  }

  render() {
    return (
      <>
        <div class="profile-main">
          <div class="profile-row">
            <div class="profile-first">
              <img src={"http://localhost:8080/merry/image/" + this.props.currentUser.profileImage.id} class="profile-img" ></img>
            </div>
            <div class="profile-second">
              <div class="profile-info">
                <h1 class="profile-h1">{this.props.currentUser.volunteerName}</h1>
                <h4 class="profile-h4">{this.props.currentUser.volunteerROLE} / {this.props.currentUser.volunteerAge}</h4>
                {
                  JSON.stringify(this.props.currentUser.volunteerIsCareGiver) === 'true' ?
                    <h4 class="profile-h4">Rider / Care Giver</h4>
                    : <h4 class="profile-h4">Rider</h4>
                }

                <h4 class="profile-h4">Created Date - {this.props.currentUser.volunteerCreatedOn}</h4>
              </div>

            </div>
            <div class="profile-third">
              <div class="contact-info">
                <p class="profile-p">Contact info</p>

                <h4 class="profile-h4">{this.props.currentUser.email}</h4>
                <h4 class="profile-h4">{this.props.currentUser.volunteerPhoneNo}</h4>
              </div>
              <div class="location-info">
                <p class="location-p">Location info</p>

                <h4 class="profile-h4">{this.props.currentUser.volunteerLocationByAddress}</h4>
                <h4 class="profile-h4">Latitude: {this.props.currentUser.volunteerLocationByLatitude}</h4>
                <h4 class="profile-h4">Longitute: {this.props.currentUser.volunteerLocationByLongitude}</h4>

              </div>
            </div>
          </div>
          <div class="profile-button">
            <button class="profile-btn" onClick={this.goBack} role="button">Back</button>
          </div>
        </div>
      </>
    )
  }
}

export default VolunteerProfile