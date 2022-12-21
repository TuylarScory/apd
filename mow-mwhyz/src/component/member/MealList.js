import React, { Component } from 'react'
import './MealList.css'
import { getApprovedDishes } from '../../service/Service'

export class MealList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            approvedMenu: []
        }
    }

    componentDidMount() {
        getApprovedDishes(this.state.id)

            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({
                    approvedMenu: response

                })
            })
    }

    getSingleApprovedDish = (id) => {
        this.props.history.push(`/viewDish/${id}`)

    }

    goBack = () => {
        this.props.history.push(`/member`)
    }
 
    render() {
        return (
            <div class="meal-list-body">
                <h2 class="meal-list-title">Meal List</h2>
                <div class="meal-list">
                    {
                        this.state.approvedMenu.map(dish =>
                            <div class="meal-list-card" key={dish.dishId}>
                                <h3 class="meal-list-card-title">{dish.dishName}</h3>
                                <img src={"http://localhost:8080/merry/image/" + dish.profileImage.id}
                                    class="meal-list-img" alt="" />
                                <div class="meal-list-sugg">
                                    <h4><i class="fa fa-cutlery" aria-hidden="true" id="meal-food"></i></h4>
                                    <h4 class="meal-list-card-suggestion">{dish.suggestion}</h4>
                                </div>
                                <div class="meal-list-card-arrow">
                                    <i aria-hidden="true" class="fa fa-long-arrow-right fa-2x" id="arrow-icon"></i>
                                    <button class="meal-card-btn" onClick={() => this.getSingleApprovedDish(dish.dishId)}>View Details</button>
                                </div>
                            </div>
                        )
                    }


                </div>
                <div class="meal-back-div">
                    <button class="meal-back-btn" onClick={this.goBack}><i class="fa fa-long-arrow-left fa-1x" aria-hidden="true"></i> &nbsp;Back</button>
                </div>
            </div>
        )
    }
}

export default MealList