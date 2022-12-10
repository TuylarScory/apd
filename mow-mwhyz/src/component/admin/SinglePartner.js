import React, { Component } from 'react'
import { getSinglePartner} from '../../service/Service';

import './DetailPageStyle.css'
export class SinglePartner extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        partners:{},
        pid: this.props.match.params.id
      }
    }

    componentDidMount(){
        getSinglePartner(this.state.pid)
        
        .then(response=>{
            this.setState({
                partners:response
            })
        })
        console.log(JSON.stringify(this.state.partners))
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
                                        <td>{this.state.partners.id}</td>
                                    </tr>
                                
                                      
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerName}</td>
                                    </tr>
                                     
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{this.state.partners.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerPhoneNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerLocationByAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Role</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerRole}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerStatus}</td>
                                    </tr> 
                                    <tr>
                                        <td>Created Date</td>
                                        <td>:</td>
                                        <td>{this.state.partners.partnerCreatedOn}</td>
                                    </tr>
                                  
                                </tbody>
                              
                            </table>
                        </div>
                        <button class="button-71" role="button" onClick={this.goBack}>Go Previous Page</button>
                    </div>
               
    )
  }
}

export default SinglePartner