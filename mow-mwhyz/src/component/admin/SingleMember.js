import React, { Component } from 'react'
import { getSingleMember} from '../../service/Service';

import './DetailPageStyle.css'
export class SingleMember extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        members:{},
        mId: this.props.match.params.id
      }
    }

    componentDidMount(){
        getSingleMember(this.state.mId)
        .then(response=>{
            this.setState({
                members:response
            
            })
        })
        
    }

    goBack = () =>{
        this.props.history.push(`/admin`)
    }

  render() {
    return (
     
        
            
                <div className="main">
                    <div className="card">

                            <i className="fa fa-pen fa-xs edit"></i>
                            <table>
                                <tbody>
                            
                                    <tr>
                                        <td>ID</td>
                                        <td>:</td>
                                        <td>{this.state.members.id}</td>
                                    </tr>
                                
                                      
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberName}</td>
                                    </tr>
                                     
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{this.state.members.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberPhoneNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberAge}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberLocationByAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Condition</td>
                                        <td>:</td>
                                      <td>{this.state.members.memberCondition} </td>   
                                  </tr> 
                                  <tr>
                                        <td>Condition Description</td>
                                        <td>:</td>
                                      <td>{this.state.members.memberCondDescription} </td>   
                                  </tr> 
                                    <tr>
                                        <td>Role</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberROLE}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberStatus}</td>
                                    </tr> 
                                    <tr>
                                        <td>Created Date</td>
                                        <td>:</td>
                                        <td>{this.state.members.memberCreatedOn}</td>
                                    </tr>
                                    <tr>
                                        <td>Image</td>
                                        <td>:</td>
                                        {/* <td>{this.state.members.}</td> */}
                                    </tr>
                                </tbody>
                              
                            </table>
                        </div>
                        <button class="button-71" role="button" onClick={this.goBack}>Go Previous Page</button>
                    </div>
               
    )
  }
}

export default SingleMember