import React, { Component } from 'react'
import { getImage, getSingleVolunteer} from '../../service/Service';
import './DetailPageStyle.css'

export class SingleVolunteer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        volunteers:{},
        vid: this.props.match.params.id,
        volunteerImage: {},
      }

      console.log(this.state.vid);
    }

    componentDidMount(){
        getSingleVolunteer(this.state.vid)
        
        .then(response=>{
            console.log("Get Id from response" + JSON.stringify(response));
            console.log(JSON.stringify(response.volunteerIsCareGiver));
            this.setState({
                volunteers: response,
                volunteerImage: response.profileImage
            })
            
        });

        console.log(this.state.volunteerImage.profileImage);
        
    }


    goBack = () =>{
        this.props.history.push(`/admin`)
    }

  render() {
    const image = JSON.stringify(this.state.volunteerImage.imagePath);
    // const image = this.state.volunteerImage.imagePath
    console.log(this.state.volunteerImage.id);
    
    console.log(image);
    return (
     
        
            
                <div className="main">
                    <div className="card">
                    <h1><img src={image} alt="image here"/></h1>
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
                                        {
                                            JSON.stringify(this.state.volunteers.volunteerIsCareGiver) === 'true' ?
                                            <td>Yes</td>
                                            : <td>No</td>
                                        }
                                        
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