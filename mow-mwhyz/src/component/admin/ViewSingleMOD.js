import React, { Component } from 'react'
import { viewSingleMOD} from '../../service/Service'; 
export class ViewSingleMOD extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        type: this.props.match.params.type,
        id: this.props.match.params.id,
         mods:[]
      }
    }

    componentDidMount(){
        viewSingleMOD(this.state.type,this.state.id)
        .then((response)=>{
            this.setState({
                mods: response
           })
        })
    }

    singleMod = (id) =>{
        this.props.history.push(`/singleMod/${id}`)
    }
  render() {
    return (
      <div>
         <h2> Pending Members List</h2>
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
                this.state.mods.map(mod =>
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
      </div>
    )
  }
}

export default ViewSingleMOD