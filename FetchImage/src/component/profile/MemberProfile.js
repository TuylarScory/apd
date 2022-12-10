import React, { Component } from 'react'
import './VolunteerProfile.css'
 

class MemberProfile extends Component {
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
                            <td>{this.props.currentUser.memberName}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{this.props.currentUser.email}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberAge}</td>
                        </tr>
                        <tr>
                            <td>Condition</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberCondition}</td>
                        </tr>
                        <tr>
                            <td>Condition Description</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberCondDescription}</td>
                        </tr>
                        <tr>
                            <td>Location By Phone Number</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberPhoneNo}</td>
                        </tr> 
                        <tr>
                            <td>Role</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberROLE}</td>
                        </tr>
                        <tr>
                            <td>Location By Address</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberLocationByAddress}</td>
                        </tr> 
                        <tr>
                            <td>Location By latitude</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberLocationByLatitude}</td>
                        </tr> 
                        <tr>
                            <td>Location By longitude</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberLocationByLongitude}</td>
                        </tr> 
                        <tr>
                            <td>Member Status</td>
                            <td>:</td>
                            <td>{this.props.currentUser.memberStatus}</td>
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

export default MemberProfile