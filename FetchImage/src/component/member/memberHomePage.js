import React, { Component } from 'react'
import { getAllDishes } from '../../service/FoodService' 
export class memberHomePage extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         menu:[],
         menuImage:""
      }
    }
    componentDidMount(){
            getAllDishes(4)
            
            .then(response=>{
              console.log(JSON.stringify(response))
                this.setState({
                    menu:response,
                    menuImage:response.profileImage
                })
            })
    }
   
  render() {
    return (
      <div>
          {
            this.state.menu.map(dish =>
                <div class="mmpopular">
                <div class="mmblpo">
                    <div class="mmpopular1">
                        <a href="MealDetail.html">
                        <img src={"http://localhost:8080/merry/image/"+this.state.profileImage.id} width="100px"></img>
                        </a>
                        <p>{dish.name}</p>
                        
                    </div>
               
            </div>
        </div>
        )}
   
      </div>

      
    )
  }
}

export default memberHomePage