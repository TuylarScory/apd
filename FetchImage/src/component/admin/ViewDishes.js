import React, { Component } from 'react'
import { getAllDishes, getPendingDishes,getApprovedDishes,approvedDish } from '../../service/FoodService'

export class ViewDishes extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
         id: this.props.match.params.id,
         menu:[],
         pendingMenu: [],
         approvedMenu:[]
      }
    }

    componentDidMount(){
        getAllDishes(this.state.id)
        
        .then(response=>{
          console.log(JSON.stringify(response))
            this.setState({
                menu:response
                
            })
        })
        
        

        getPendingDishes(this.state.id)
        
        .then(response=>{
          console.log(JSON.stringify(response))
            this.setState({
              pendingMenu:response
                
            })
        })

        getApprovedDishes(this.state.id)
        
        .then(response=>{
          console.log(JSON.stringify(response))
            this.setState({
              approvedMenu:response
                
            })
        })

    }

    getSinglePendingDish = (id) =>{
      this.props.history.push(`/getPendingDish/${id}`)
  }

  getSingleApprovedDish = (id) =>{
    this.props.history.push(`/getApprovedDish/${id}`)
}

  approveDish = (id) =>{
    let dish = {
        dishId:id,
        dishStatus:"APPROVED"
    }
    console.log(dish)
    approvedDish(dish)
    .then(response =>{
        console.log("Save Product" + JSON.stringify(response))
    })
}

  render() {
    return (
      <div>
       <h2> All Dishes List</h2>
    <div className="align">
        <table className="styled-table">
        <thead>
            <tr>
                <th>Dish Id</th>
                <th>Dish Name</th>               
               <th> Calorie </th>
               <th> Fat </th>
               <th> Sugar </th>
               <th> Carbohydrate </th>
               <th> Fibre </th>
               <th> Protein </th>
               <th> Suggestion </th>
               <th> Description </th>
               <th> Dish Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                
                this.state.menu.map(dish =>
                <tr class="table-secondary" key = {dish.dishId}>
                     <td>{dish.dishId}</td>
                     <td>{dish.dishName}</td>
                    <td>{dish.calorie}</td>
                    <td>{dish.fat}</td>
                    <td>{dish.sugar}</td>
                    <td>{dish.carbs}</td>
                    <td>{dish.fibre}</td>
                    <td>{dish.protein}</td>
                    <td>{dish.suggestion}</td>
                    <td>{dish.dishDescription}</td> 
                    <td>{dish.dishStatus}</td>      
                    {/* <td><button type="button" onClick={()=>this.approveMember(member.email)}>APPROVE</button>          */}
                    
                </tr>
            
                
            )}
           </tbody>
            </table>
    </div>  

    <h2> Pending Dishes List</h2>
    <div className="align">
        <table className="styled-table">
        <thead>
            <tr>
                <th>Dish Id</th>
                <th>Dish Name</th>               
               {/* <th> Calorie </th> */}
               {/* <th> Fat </th>
               <th> Sugar </th>
               <th> Carbohydrate </th>
               <th> Fibre </th>
               <th> Protein </th>
               <th> Suggestion </th> */}
               <th> Description </th>
               <th> Dish Status </th>
               <th> Action </th>
            </tr>
        </thead>
        <tbody>
            {
                
                this.state.pendingMenu.map(dish =>
                <tr class="table-secondary" key = {dish.dishId}>
                     <td>{dish.dishId}</td>
                     <td>{dish.dishName}</td>
                    {/* <td>{dish.calorie}</td> */}
                    {/* <td>{dish.fat}</td>
                    <td>{dish.sugar}</td>
                    <td>{dish.carbs}</td>
                    <td>{dish.fibre}</td>
                    <td>{dish.protein}</td>
                    <td>{dish.suggestion}</td> */}
                    <td>{dish.dishDescription}</td> 
                    <td>{dish.dishStatus}</td>   
                    <td><button type="button" onClick={()=>this.approveDish(dish.dishId)}>APPROVE</button>
                     </td>   
                    <td><button type="button" onClick={()=>this.getSinglePendingDish(dish.dishId)}>View Detail</button> </td>      
                    
                </tr>
            
                
            )}
           </tbody>
            </table>
    </div>  

    <h2> Approved Dishes List</h2>
    <div className="align">
        <table className="styled-table">
        <thead>
            <tr>
                <th>Dish Id</th>
                <th>Dish Name</th>               
               {/* <th> Calorie </th>
               <th> Fat </th>
               <th> Sugar </th>
               <th> Carbohydrate </th>
               <th> Fibre </th>
               <th> Protein </th>
               <th> Suggestion </th> */}
               <th> Description </th>
               <th> Dish Status </th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                
                this.state.approvedMenu.map(dish =>
                <tr class="table-secondary" key = {dish.dishId}>
                     <td>{dish.dishId}</td>
                     <td>{dish.dishName}</td>
                    {/* <td>{dish.calorie}</td>
                    <td>{dish.fat}</td>
                    <td>{dish.sugar}</td>
                    <td>{dish.carbs}</td>
                    <td>{dish.fibre}</td>
                    <td>{dish.protein}</td>
                    <td>{dish.suggestion}</td> */}
                    <td>{dish.dishDescription}</td> 
                    <td>{dish.dishStatus}</td>      
                   
                    <td><button type="button" onClick={()=>this.getSingleApprovedDish(dish.dishId)}>View Detail</button> </td>      
                </tr>
            
                
            )}
           </tbody>
            </table>
    </div> 
          </div>
    )
  }
}

export default ViewDishes