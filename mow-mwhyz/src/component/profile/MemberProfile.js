import React, { Component } from 'react'
import './Profile.css'

export class MemberProfile extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  goBack = () => {
    this.props.history.push(`/member`)
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
                <h1 class="profile-h1">{this.props.currentUser.memberName}</h1>
                <h4 class="profile-h4">{this.props.currentUser.memberROLE} / {this.props.currentUser.memberAge}</h4>
                <h4 class="profile-h4">Created Date - {this.props.currentUser.memberCreatedOn}</h4>
              </div>
              <div class="condition-info">
                <p class="condition-p">Condition info</p>

                <h4 class="profile-h4 condition">{this.props.currentUser.memberCondition}</h4>
                <h4 class="profile-h4">{this.props.currentUser.memberCondDescription}</h4>

              </div>
            </div>
            <div class="profile-third">
              <div class="contact-info">
                <p class="profile-p">Contact info</p>

                <h4 class="profile-h4">{this.props.currentUser.email}</h4>
                <h4 class="profile-h4">{this.props.currentUser.memberPhoneNo}</h4>
              </div>
              <div class="location-info">
                <p class="location-p">Location info</p>

                <h4 class="profile-h4">{this.props.currentUser.memberLocationByAddress}</h4>
                <h4 class="profile-h4">Latitude: {this.props.currentUser.memberLocationByLatitude}</h4>
                <h4 class="profile-h4">Longitute: {this.props.currentUser.memberLocationByLongitude}</h4>

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

export default MemberProfile