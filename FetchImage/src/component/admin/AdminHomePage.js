import React, { Component } from 'react'
import './AdminHomePage.css'

import { approvedMember, getPendingMember, getAllMember, 
    getPendingPartner,getAllPartner,
    getPendingVolunteer, getAllVolunteer, 
     } from '../../service/FoodService';

export class AdminHomePage extends Component {
    
    constructor(props) {
      super(props)

      this.state = {
         members:[],
         allMembers:[],
         partners:[],
         allPartners:[],
         volunteers:[],
         allVolunteers:[],
         volunteerIsCareGiver:"",

      }
    }

    componentDidMount(){
        getPendingMember()
        .then((response)=>{
            this.setState({
                members: response
           })
        })

        getAllMember()
        .then((response)=>{
            this.setState({
                allMembers: response
           })
        }) 

        getPendingPartner()
        .then((response)=>{
            this.setState({
                partners: response
           })
        }) 

        getAllPartner()
        .then((response)=>{
            this.setState({
                allPartners: response
           })
        }) 

        getPendingVolunteer()
        .then((response)=>{
            this.setState({
                volunteers: response
           })
        }) 

        getAllVolunteer()
        .then((response)=>{
            this.setState({
                allVolunteers: response
           })
        })


    }

      
    approveMember = (email) =>{
        let member = {
            userEmail:email,
            userStatus:"APPROVED"
        }
        console.log(member)
        approvedMember(member)
        .then(response =>{
            console.log("Save Product" + JSON.stringify(response))
        })
    }

 
      getMember = (id) =>{
        this.props.history.push(`/get/${id}`)
    }

    getPartner = (id) =>{
        this.props.history.push(`/getPartner/${id}`)
    }
    getAllDishes = (id) =>{
        this.props.history.push(`/getAllDishes/${id}`)
    }
    getVolunteer = (id) =>{
        this.props.history.push(`/getVolunteer/${id}`)
    }
  
  render() {
    
    return (
      <div>
         <div class="header">
        <h1>Meals On Wheels</h1>
        <img src="logo.png" alt="" class="logo"></img>
    </div>


    <nav id="navbar">
        <div class="nav-left">
            <ul>
                <li><a href="#">Add Admin</a></li>
                <li><a href="#">Request Meal List</a></li>
                <li><a href="#">Meals List</a></li>
            </ul>
        </div>
        <div class="nav-middle">
            <img src="logo.png" alt="" id="nav-middle-img"></img>
        </div>
        <div class="nav-right">
            <ul>
               
                <li><a href="#">Log Out</a></li>
                <li><i class="fas fa-user"></i></li>
               
                
            </ul>
        </div>
    </nav>

   
    <h2> Pending Members List</h2>
    <div className="align">
        <table className="styled-table">
        <thead>
            <tr>
                <th>Member Id</th>
                <th>Member Name</th>               
               <th> Member Email </th>
               <th> Member Role </th>
               <th> Member Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.members.map(member =>
                <tr class="table-secondary" key = {member.id}>
                     <td>{member.id}</td>
                    <td>{member.memberName}</td>
                    <td>{member.email}</td>
                    <td>{member.memberROLE}</td>
                    <td>{member.memberStatus}</td>    
                    <td><button type="button" onClick={()=>this.approveMember(member.email)}>APPROVE</button>         
                    </td>
                </tr>
            
                )
            }
           </tbody>
            </table>
    </div>  

    <h2> All Members List</h2>
    <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
            <th>Member Id</th>
                <th>Member Name</th>               
               <th> Member Email </th>
               <th> Member Role </th>
               <th> Member Status </th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.allMembers.map(member =>
                <tr class="table-secondary" key = {member.memberId}>
                     <td>{member.id}</td>
                    <td>{member.memberName}</td>
                    <td>{member.email}</td>
                    <td>{member.memberROLE}</td>
                    <td>{member.memberStatus}</td> 
                    <td>   <button type="button"  onClick={()=>this.getMember(member.id)}>View Detail</button></td>
                </tr>
                )
            }
         </tbody>  
        </table>
        </div>  
    

    <h2> Pending Partners List</h2>
    <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Partner Id</th>
                <th>Partner Name</th>               
               <th> Partner Email </th>
               <th> Partner Role </th>
               <th> Partner Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.partners.map(partner =>
                <tr class="table-secondary" key = {partner.id}>
                     <td>{partner.id}</td>
                    <td>{partner.partnerName}</td>
                    <td>{partner.email}</td>
                    <td>{partner.partnerRole}</td>
                    <td>{partner.partnerStatus}</td>     
                    <td><button type="button" onClick={()=>this.approveMember(partner.email)}>APPROVE</button>
                     </td>
                </tr>
                )
            }
           </tbody>
            </table>
            </div>  

            <h2> All Partners List</h2>
            <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Partner Id</th>
                <th>Partner Name</th>               
               <th> Partner Email </th>
               <th> Partner Role </th>
               <th> Partner Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.allPartners.map(partner =>
                <tr class="table-secondary" key = {partner.id}>
                    <td>{partner.id}</td>
                    <td>{partner.partnerName}</td>
                    <td>{partner.email}</td>
                    <td>{partner.partnerRole}</td>
                    <td>{partner.partnerStatus}</td> 
                    <td>   <button type="button"  onClick={()=>this.getPartner(partner.id)}>View Detail</button></td>
                    <td>   <button type="button"  onClick={()=>this.getAllDishes(partner.id)}>View Dishes</button></td>
                </tr>
                )
            }
          </tbody> 
            </table>
            </div>  

            <h2> Pending Volunteers List</h2>
            <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Volunteer Id</th>
                <th>Volunteer Name</th> 
                <th>Is Care Giver</th>            
               <th> Volunteer Email </th>
               <th> Volunteer Role </th>
               <th> Volunteer Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.volunteers.map(volunteer =>
                <tr class="table-secondary" key = {volunteer.id}>
                     <td>{volunteer.id}</td>
                    <td>{volunteer.volunteerName}</td>
                    <td>{volunteer.volunteeris_care_giver}</td>
                
                    <td>{volunteer.email}</td>
                
                    <td>{volunteer.volunteerROLE}</td>
                    <td>{volunteer.volunteerStatus}</td>    
                
                    <td><button type="button" onClick={()=>this.approveMember(volunteer.email)}>APPROVE</button>
                     </td>
                </tr>
                )
            }
        </tbody>
            </table>
            </div>  

            <h2> All Volunteers List</h2>
            <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Volunteer Id</th>
                <th>Volunteer Name</th> 
               <th> Volunteer Email </th>
               <th> Volunteer Role </th>
               <th> Volunteer Status </th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                
                this.state.allVolunteers.map(volunteer =>
                <tr class="table-secondary" key = {volunteer.id}>
                     <td>{volunteer.id}</td>
                    <td>{volunteer.volunteerName}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.volunteerROLE}</td>
                    <td>{volunteer.volunteerStatus}</td>    
                    
                    <td>   <button type="button"  onClick={()=>this.getVolunteer(volunteer.id)}>View Detail</button></td>
                </tr>
                )
            }
        </tbody>
            </table>
            </div>
   
           
    
      </div>
    )
  }
}

export default AdminHomePage