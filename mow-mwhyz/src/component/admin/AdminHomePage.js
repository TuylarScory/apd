import React, { Component } from 'react'
import './AdminHomePage.css'

import { approvedMember, getPendingMember, getApprovedMember, getAllMember, 
    getPendingPartner,getAllPartner,getApprovedPartner,
    getPendingVolunteer, getApprovedVolunteer, getAllVolunteer, viewAllMOD,viewMODStatus
     } from '../../service/Service';

export class AdminHomePage extends Component {
    
    constructor(props) {
      super(props)

      this.state = {
         members:[],
         approvedMembers:[],
         allMembers:[],
         partners:[],
         approvedPartners:[],
         allPartners:[],
         volunteers:[],
         approvedVolunteers:[],
         allVolunteers:[],
         volunteerIsCareGiver:"",
        allMods:[],
        orderedMODs:[],
        orderedStatus:"ordered",
        deliveringMODs:[],
        deliveringStatus:"delivering",
        completedMODs:[],
        completedStatus:"completed"
      }
    }

    componentDidMount(){
        getPendingMember()
        .then((response)=>{
            this.setState({
                members: response
           })
        })

        getApprovedMember()
        .then((response)=>{
            this.setState({
                approvedMembers: response
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
        
        getApprovedPartner()
        .then((response)=>{ 
            this.setState({
                approvedPartners: response
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

        getApprovedVolunteer()
        .then((response)=>{
            this.setState({
                approvedVolunteers: response
           })
        }) 

        getAllVolunteer()
        .then((response)=>{
            this.setState({
                allVolunteers: response
           })
        })

        viewAllMOD()
        .then((response)=>{
            this.setState({
                allMods: response
           })
        })
        viewMODStatus(this.state.orderedStatus)
        .then((response)=>{
            this.setState({
                orderedMODs: response
           })
        })

        viewMODStatus(this.state.deliveringStatus)
        .then((response)=>{
            this.setState({
                deliveringMODs: response
           })
        })

        viewMODStatus(this.state.completedStatus)
        .then((response)=>{
            this.setState({
                completedMODs: response
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

    // MOD list
    viewSingleMOD = (type,id) =>{
        this.props.history.push(`/viewSingleMOD/${type}/${id}`)
    }

    // View Detail 
    singleMod = (id) =>{
        this.props.history.push(`/singleMod/${id}`)
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

   
    
    {this.state.members.length > 0 ? (
        
        <div className="align">
            <h2> Pending Members List</h2>
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
    ):(
        <h2>Sorry There is No Pending Member!!!!</h2>
    )}

{this.state.approvedMembers.length > 0 ? (
        
        <div className="align">
            <h2> Approved Members List</h2>
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
                this.state.approvedMembers.map(member =>
                    
                <tr class="table-secondary" key = {member.id}>
                     <td>{member.id}</td>
                    <td>{member.memberName}</td>
                    <td>{member.email}</td>
                    <td>{member.memberROLE}</td>
                    <td>{member.memberStatus}</td>    
                    <td>   <button type="button"  onClick={()=>this.getMember(member.id)}>View Detail</button></td>
                    <td>   <button type="button"  onClick={()=>this.viewSingleMOD(member.memberROLE, member.id)}>View Single MOD</button></td>
                </tr>
            
                )
            }
           </tbody>
            </table>
    </div>  
    ):(
        <h2>Sorry There is No APPROVED Member!!!!</h2>
    )}



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
    
 {this.state.partners.length > 0 ? (
    
    <div className="align">
        <h2> Pending Partners List</h2>
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
 ):(
    <h2>Sorry There is no pending Partner!!!</h2>
 )}


{this.state.approvedPartners.length > 0 ? (
    
    <div className="align">
        <h2> Approved Partners List</h2>
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
                this.state.approvedPartners.map(partner =>
                <tr class="table-secondary" key = {partner.id}>
                     <td>{partner.id}</td>
                    <td>{partner.partnerName}</td>
                    <td>{partner.email}</td>
                    <td>{partner.partnerRole}</td>
                    <td>{partner.partnerStatus}</td>     
                    <td>   <button type="button"  onClick={()=>this.getPartner(partner.id)}>View Detail</button></td>
                    <td>   <button type="button"  onClick={()=>this.getAllDishes(partner.id)}>View Dishes</button></td>
                    <td>   <button type="button"  onClick={()=>this.viewSingleMOD(partner.partnerRole, partner.id)}>View MOD</button></td>
                </tr>
                )
            }
           </tbody>
            </table>
            </div>  
 ):(
    <h2>Sorry There is no approved Partner!!!</h2>
 )}

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
                </tr>
                )
            }
          </tbody> 
            </table>
            </div>  


    {this.state.volunteers.length > 0 ? (
            
            <div className="align">
                <h2> Pending Volunteers List</h2>
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Volunteer Id</th>
                <th>Volunteer Name</th> 
                <th>Is Care Giver</th>    
                <th>Is Available</th>         
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
                    {volunteer.volunteerIsCareGiver == "0" ? (<td>false</td>):(<td>true</td>)} 
                    {volunteer.available == "0" ? (<td>No</td>):(<td>Yes</td>)} 
                
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
    ):(
        <h2>Sorry There is no pending Volunteer!!!</h2>
    ) } 


{this.state.approvedVolunteers.length > 0 ? (
            
            <div className="align">
                <h2> Approved Volunteers List</h2>
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Volunteer Id</th>
                <th>Volunteer Name</th> 
                <th>Is Care Giver</th>  
                <th>Is Available</th>          
               <th> Volunteer Email </th>
               <th> Volunteer Role </th>
               <th> Volunteer Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.approvedVolunteers.map(volunteer =>
                <tr class="table-secondary" key = {volunteer.id}>
                     <td>{volunteer.id}</td>
                    <td>{volunteer.volunteerName}</td>
                    {volunteer.volunteerIsCareGiver == "0" ? (<td>false</td>):(<td>true</td>)} 
                    {volunteer.available == "0" ? (<td>No</td>):(<td>Yes</td>)} 
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
    ):(
        <h2>Sorry There is no approved Volunteer!!!</h2>
    ) } 



            <h2> All Volunteers List</h2>
            <div className="align">
        <table className="styled-table" >
            <thead>
            <tr>
                <th>Volunteer Id</th>
                <th>Volunteer Name</th> 
                <th>Is Care Giver</th>  
                <th>Is Available</th> 
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
                    {volunteer.volunteerIsCareGiver == "0" ? (<td>false</td>):(<td>true</td>)} 
                    {volunteer.available == "0" ? (<td>No</td>):(<td>Yes</td>)} 
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
   
   {/* ---------------------------------------------------------- */}
            <h2> All Meal Order Delivery List</h2>
            <div className="align">
        <table className="styled-table">
        <thead>
            <tr>
                <th>MOD Id</th>              
               <th> Meal Name </th>
               <th> Order Status</th>
               <th> Partner Name </th>
               <th> Volunteer Name </th>
               <th> Is Care Giver </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.allMods.map(mod =>
                <tr class="table-secondary" key = {mod.mealOrderDeliveryId}>
                     <td>{mod.mealOrderDeliveryId}</td>
                    <td>{mod.dish.dishName}</td>
                    <td>{mod.modStatus}</td>
                    <td>{mod.partner.partnerName}</td>
                    <td>{mod.volunteer.volunteerName}</td>    
                    {mod.careGiver == "0" ? (<td>false</td>):(<td>true</td>)}   
                    <td><button type="button" onClick={()=>this.singleMod(mod.mealOrderDeliveryId)}>View Detail</button>         </td>   
                </tr>
            
                )
            }
           </tbody>
            </table>
    </div>  
{/* ---------------------------------------------------------- */}
    {this.state.orderedMODs.length > 0 ? (

            <div className="align">
                    <h2> Ordered Meal Order Delivery List</h2>
        <table className="styled-table">
        <thead>
            <tr>
                <th>MOD Id</th>              
               <th> Meal Name </th>
               <th> Order Status</th>
               <th> Partner Name </th>
               <th> Volunteer Name </th>
               <th> Is Care Giver </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.orderedMODs.map(mod =>
                <tr class="table-secondary" key = {mod.mealOrderDeliveryId}>
                     <td>{mod.mealOrderDeliveryId}</td>
                    <td>{mod.dish.dishName}</td>
                    <td>{mod.modStatus}</td>
                    <td>{mod.partner.partnerName}</td>
                    <td>{mod.volunteer.volunteerName}</td>    
                    {mod.careGiver == "0" ? (<td>false</td>):(<td>true</td>)}  
                    <td><button type="button" onClick={()=>this.singleMod(mod.mealOrderDeliveryId)}>View Detail</button>         </td>   
                </tr>
            
                )
            }
           </tbody>
            </table>
    </div> 
    ):(
        <h2>Sorry There is Order!!!</h2>
    )
  }

{this.state.deliveringMODs.length > 0 ? (
    
            <div className="align">
                <h2> Delivering Meal Order Delivery List</h2>
        <table className="styled-table">
        <thead>
            <tr>
                <th>MOD Id</th>              
               <th> Meal Name </th>
               <th> Order Status</th>
               <th> Partner Name </th>
               <th> Volunteer Name </th>
               <th> Is Care Giver </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.deliveringMODs.map(mod =>
                <tr class="table-secondary" key = {mod.mealOrderDeliveryId}>
                     <td>{mod.mealOrderDeliveryId}</td>
                    <td>{mod.dish.dishName}</td>
                    <td>{mod.modStatus}</td>
                    <td>{mod.partner.partnerName}</td>
                    <td>{mod.volunteer.volunteerName}</td>    
                    {mod.careGiver == "0" ? (<td>false</td>):(<td>true</td>)}   
                    <td><button type="button" onClick={()=>this.singleMod(mod.mealOrderDeliveryId)}>View Detail</button>         </td>   
                </tr>
            
                )
            }
           </tbody>
            </table>
    </div>  
):(
        <h2>Sorry No one is delivering!!!</h2>
)}  

{this.state.completedMODs.length > 0 ? (
    
    <div className="align">
        <h2> Completed Meal Order Delivery List</h2>
<table className="styled-table">
<thead>
    <tr>
        <th>MOD Id</th>              
       <th> Meal Name </th>
       <th> Order Status</th>
       <th> Partner Name </th>
       <th> Volunteer Name </th>
       <th> Is Care Giver </th>
       <th> Action </th>
    </tr>
</thead>
<tbody>
    {
        this.state.completedMODs.map(mod =>
        <tr class="table-secondary" key = {mod.mealOrderDeliveryId}>
             <td>{mod.mealOrderDeliveryId}</td>
            <td>{mod.dish.dishName}</td>
            <td>{mod.modStatus}</td>
            <td>{mod.partner.partnerName}</td>
            <td>{mod.volunteer.volunteerName}</td>    
            {mod.careGiver == "0" ? (<td>false</td>):(<td>true</td>)}   
            <td><button type="button" onClick={()=>this.singleMod(mod.mealOrderDeliveryId)}>View Detail</button>         </td>   
        </tr>
    
        )
    }
   </tbody>
    </table>
</div>  
):(
<h2>Sorry No one is completed!!!</h2>
)}  
      </div>
    )
  }
}

export default AdminHomePage