import React, { Component } from 'react'
import './VolunteerProfile.css'
 

class PartnerProfile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
  render() {
    return (
        <div>
          

    <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerName}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{this.props.currentUser.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerPhoneNo}</td>
                        </tr>
        
                        <tr>
                            <td>Role</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerRole}</td>
                        </tr>
                        <tr>
                            <td>Location By Address</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerLocationByAddres}</td>
                        </tr> 
                        <tr>
                            <td>Location By latitude</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerLocationByLatitude}</td>
                        </tr> 
                        <tr>
                            <td>Location By longitude</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerLocationByLongitude}</td>
                        </tr> 
                        <tr>
                            <td>Partner Status</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerStatus}</td>
                        </tr> 
                        <tr>
                            <td>Partner Created Date</td>
                            <td>:</td>
                            <td>{this.props.currentUser.partnerCreatedOn}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 </div>
    )
  }
}

export default PartnerProfile