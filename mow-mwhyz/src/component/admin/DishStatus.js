import React, { Component } from 'react'
import { getPendingDishes, getApprovedDishes, approvedDish, getAllPartner } from '../../service/Service'
import './AdminHome.css'

export class DishStatus extends Component {

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            pendingMenu: [],
            approvedMenu: [],
            allPartners: [],
        }
    }

    componentDidMount() {


        getPendingDishes(this.state.id)

            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({
                    pendingMenu: response

                })
            })

        getApprovedDishes(this.state.id)

            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({
                    approvedMenu: response

                })
            })

        getAllPartner()
            .then((response) => {
                this.setState({
                    allPartners: response
                })
            })


    }

    goBack = () => {
        this.props.history.push(`/getAllPartners`)
    }

    getDish = (id) => {
        this.props.history.push(`/getDish/${id}`)
    }

    approveDish = (id) => {
        let dish = {
            dishId: id,
            dishStatus: "APPROVED"
        }
        console.log(dish)
        approvedDish(dish)
            .then(response => {
                console.log("Save Product" + JSON.stringify(response))
            })
    }

    getAllDishes = (id) => {
        this.props.history.push(`/getAllMeals/${id}`)
    }

    render() {
        return (
            <>
                <h1 class="admin_home_h1">Meals List</h1>



                <div class="all-meal-btn-div">
                    <button class="all-meal-btn" role="button" onClick={() => this.getAllDishes(this.state.id)}>All Meals</button>
                </div>


                <div class="admin_row_1">

                    <div class="admin_col_1">
                        <h3 class="admin_h3">Pending meal</h3>
                        <div class="tbl-header">
                            <table cellpadding="0" className='table' cellspacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th id="admin_th">Name</th>
                                        <th id="admin_th">Suggestion </th>
                                        <th id="admin_th">Status </th>
                                        <th id="admin_th">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div class="tbl-content">
                            <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                <tbody>
                                    {
                                        this.state.pendingMenu.map(dish =>
                                            <tr key={dish.dishId}>
                                                <td id="admin_td">{dish.dishName}</td>
                                                <td id="admin_td">{dish.suggestion}</td>
                                                <td id="admin_td">{dish.dishStatus}</td>
                                                <td id="admin_td">
                                                    <button type="button" class="approve" onClick={
                                                        () => {
                                                            this.approveDish(dish.dishId);
                                                            window.location.reload(false)
                                                        }
                                                    }>Approve</button>
                                                </td>
                                            </tr>

                                        )
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="admin_col_2">
                        <h3 class="admin_h3">Approved Meal</h3>
                        <div class="tbl-header">
                            <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                <thead>
                                    <tr>
                                        <th id="admin_th">Name</th>
                                        <th id="admin_th">Suggestion </th>
                                        <th id="admin_th">Status </th>
                                        <th id="admin_th">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div class="tbl-content">
                            <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                <tbody>
                                    {
                                        this.state.approvedMenu.map(dish =>
                                            <tr key={dish.dishId}>
                                                <td id="admin_td">{dish.dishName}</td>
                                                <td id="admin_td">{dish.suggestion}</td>
                                                <td id="admin_td">{dish.dishStatus}</td>
                                                <td id="admin_td">
                                                    <button type="button" class="view" onClick={() => this.getDish(dish.dishId)}>View</button>
                                                </td>

                                            </tr>
                                        )
                                    }



                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

                <div className='user-btn-div' id='btn-dish-status'>
                    <button class="user-back-btn" role="button" onClick={this.goBack}>Back</button>
                </div>
            </>
        )
    }
}

export default DishStatus