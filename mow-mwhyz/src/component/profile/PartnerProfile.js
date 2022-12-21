import React, { Component } from 'react'
import './Profile.css'

export class PartnerProfile extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    goBack = () => {
        this.props.history.push(`/partner`)
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
                                <h1 class="profile-h1">{this.props.currentUser.partnerName}</h1>
                                <h4 class="profile-h4">{this.props.currentUser.partnerRole}</h4>
                                <h4 class="profile-h4">{this.props.currentUser.partnerCreatedOn}</h4>
                            </div>

                        </div>
                        <div class="profile-third">
                            <div class="contact-info">
                                <p class="profile-p">Contact info</p>

                                <h4 class="profile-h4">{this.props.currentUser.email}</h4>
                                <h4 class="profile-h4">{this.props.currentUser.partnerPhoneNo}</h4>
                            </div>
                            <div class="location-info">
                                <p class="location-p">Location info</p>

                                <h4 class="profile-h4">{this.props.currentUser.partnerLocationByAddress}</h4>
                                <h4 class="profile-h4">Latitude: {this.props.currentUser.partnerLocationByLatitude}</h4>
                                <h4 class="profile-h4">Longitute: {this.props.currentUser.partnerLocationByLongitude}</h4>

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

export default PartnerProfile