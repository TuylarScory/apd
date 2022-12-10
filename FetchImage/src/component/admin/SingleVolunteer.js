import React, { Component } from 'react'
import { getSingleVolunteer} from '../../service/FoodService';

import './DetailPageStyle.css'
export class SingleVolunteer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        volunteers:{},
        vid: this.props.match.params.id,
        profileImage:""
      }
    }

    componentDidMount(){
        getSingleVolunteer(this.state.vid)
        
        .then(response=>{
            console.log(JSON.stringify(response))
            this.setState({
                volunteers:response,
                profileImage:response.profileImage
            })
        })
        console.log(JSON.stringify(this.state.volunteers))
    }

    goBack = () =>{
        this.props.history.push(`/admin`)
    }

  render() {
    return (
     
        
            
                <div className="main">
                     <img src={"http://localhost:8080/merry/image/"+this.state.profileImage.id} width="100px"></img>
                    <div className="card">

                            <i className="fa fa-pen fa-xs edit"></i>
                            <table>
                                <tbody>
                            
                                    <tr>
                                        <td>ID</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.id}</td>
                                    </tr>
                                
                                      
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerName}</td>
                                    </tr>

                                    <tr>
                                        <td>Age</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerAge}</td>
                                    </tr>

                                    <tr>
                                        <td>Is Care Giver</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerIsCareGiver}</td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerPhoneNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerLocationByAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Role</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerROLE}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerStatus}</td>
                                    </tr> 
                                    <tr>
                                        <td>Created Date</td>
                                        <td>:</td>
                                        <td>{this.state.volunteers.volunteerCreatedOn}</td>
                                    </tr>
                                  
                                </tbody>
                              
                            </table>
                        </div>

                        <button class="button-71" role="button" onClick={this.goBack}>Go Previous Page</button>
                    </div>
               
    )
  }
}

export default SingleVolunteer