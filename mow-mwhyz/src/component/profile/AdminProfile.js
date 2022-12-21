import React, { Component } from 'react'

export class AdminProfile extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  goBack = () => {
    this.props.history.push(`/admin`)
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
                <h1 class="profile-h1">{this.props.currentUser.adminName}</h1>
                <h4 class="profile-h4">{this.props.currentUser.userRole}</h4>
                <h4 class="profile-h4">Created Date - {this.props.currentUser.adminCreatedOn}</h4>
              </div>
            </div>
            <div class="profile-third">
              <div class="contact-info">
                <p class="profile-p">Contact info</p>

                <h4 class="profile-h4">{this.props.currentUser.email}</h4>
              </div>
            </div>
          </div>
          <div class="admin-profile-button">
            <button class="admin-profile-btn" onClick={this.goBack} role="button">Back</button>
          </div>
        </div>
      </>
    )
  }
}

export default AdminProfile