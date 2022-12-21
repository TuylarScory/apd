import React, { Component } from 'react'
import { getSingleApprovedDishes} from '../../service/Service';

export class SingleApprovedDish extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        dishes:{},
        did: this.props.match.params.id
      }
    } 

    componentDidMount(){
        getSingleApprovedDishes(this.state.did)
        
        .then(response=>{
            this.setState({
                dishes:response
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
                                        <td>{this.state.dishes.dishId}</td>
                                    </tr>
                                
                                      
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.dishName}</td>
                                    </tr>
                                     
                                    <tr>
                                        <td>Calorie</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.calorie}</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.fat}</td>
                                    </tr>
                                    <tr>
                                        <td>Sugar</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.sugar}</td>
                                    </tr>
                                    <tr>
                                        <td>Carbohydrate</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.carbs}</td>
                                    </tr>
                                    <tr>
                                        <td>Fibre</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.fibre}</td>
                                    </tr> 
                                    <tr>
                                        <td>Protein</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.protein}</td>
                                    </tr>
                                    <tr>
                                        <td>Suggestion</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.suggestion}</td>
                                    </tr>
                                    <tr>
                                        <td>Dish Description</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.dishDescription}</td>
                                    </tr>
                                    <tr>
                                        <td>Dish Status</td>
                                        <td>:</td>
                                        <td>{this.state.dishes.dishStatus}</td>
                                    </tr>
                                </tbody>
                              
                            </table>
                        </div>
                        <button class="button-71" role="button" onClick={this.goBack}>Go Previous Page</button>
                    </div>
               
    )
  }
}

export default SingleApprovedDish