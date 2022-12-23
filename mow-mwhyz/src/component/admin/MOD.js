import React, { Component } from 'react'
import { viewMODStatus } from '../../service/Service';

import './AdminHome.css'

export class MOD extends Component {

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            orderedMODs: [],
            orderedStatus: "ordered",
            deliveringMODs: [],
            deliveringStatus: "delivering",
            completedMODs: [],
            completedStatus: "completed"
        }
    }

    componentDidMount() {


        viewMODStatus(this.state.orderedStatus)
            .then((response) => {
                this.setState({
                    orderedMODs: response
                })
            })

        viewMODStatus(this.state.deliveringStatus)
            .then((response) => {
                this.setState({
                    deliveringMODs: response
                })
            })

        viewMODStatus(this.state.completedStatus)
            .then((response) => {
                this.setState({
                    completedMODs: response
                })
            })


    }

    goBack = () => {
        this.props.history.push(`/admin`)
    }

    singleMod = (id) => {
        this.props.history.push(`/orderDetail/${id}`)
    }


    getAllOrder = () => {
        this.props.history.push(`/getAllMealOrder`)
    }

    render() {
        return (
            <>
                <h1 class="admin_home_h1">Meals Order List</h1>



                <div class="all-meal-btn-div">
                    <button class="all-meal-btn" role="button" onClick={this.getAllOrder}>All Order List</button>
                </div>


                <div class="mod_row_1">

                    <div class="admin_mod">
                        <h3 class="admin_h3">Ordered Meal List</h3>
                        <div class="tbl-header">
                            <table cellpadding="0" className='table' cellspacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th id="admin_th">ID</th>
                                        <th id="admin_th">Meal Name </th>
                                        <th id="admin_th">Order Status </th>
                                        <th id="admin_th">Food Status </th>
                                        <th id="admin_th">Is Care Giver?</th>
                                        <th id="admin_th">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {
                            this.state.orderedMODs.length > 0 ? (
                                <div class="tbl-content">
                                    <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                        <tbody>
                                            {
                                                this.state.orderedMODs.map(mod =>
                                                    <tr key={mod.mealOrderDeliveryId}>
                                                        <td id="admin_td">{mod.mealOrderDeliveryId}</td>
                                                        <td id="admin_td">{mod.dish.dishName}</td>
                                                        <td id="admin_td">{mod.modStatus}</td>
                                                        <td id="admin_td">{mod.foodStatus}</td>
                                                        {
                                                            JSON.stringify(mod.careGiver) === 'true' ?
                                                                <td class="admin_td">Yes</td>
                                                                : <td class="admin_td">No</td>
                                                        }
                                                        <td id="admin_td">
                                                            <button type="button" class="view" onClick={() => this.singleMod(mod.mealOrderDeliveryId)}>View</button>
                                                        </td>
                                                    </tr>

                                                )
                                            }



                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h1 class="alert-message">Sorry. There is no ordered Meals!!! </h1>
                            )
                        }

                    </div>
                </div>

                <div class="mod_row_1">

                    <div class="admin_mod">
                        <h3 class="admin_h3">Delivering Meal List</h3>
                        <div class="tbl-header">
                            <table cellpadding="0" className='table' cellspacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th id="admin_th">ID</th>
                                        <th id="admin_th">Meal Name </th>
                                        <th id="admin_th">Order Status </th>
                                        <th id="admin_th">Food Status </th>
                                        <th id="admin_th">Is Care Giver?</th>
                                        <th id="admin_th">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {
                            this.state.deliveringMODs.length > 0 ? (
                                <div class="tbl-content">
                                    <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                        <tbody>
                                            {
                                                this.state.deliveringMODs.map(mod =>
                                                    <tr key={mod.mealOrderDeliveryId}>
                                                        <td id="admin_td">{mod.mealOrderDeliveryId}</td>
                                                        <td id="admin_td">{mod.dish.dishName}</td>
                                                        <td id="admin_td">{mod.modStatus}</td>
                                                        <td id="admin_td">{mod.foodStatus}</td>
                                                        {
                                                            JSON.stringify(mod.careGiver) === 'true' ?
                                                                <td class="admin_td">Yes</td>
                                                                : <td class="admin_td">No</td>
                                                        }
                                                        <td id="admin_td">
                                                            <button type="button" class="view" onClick={() => this.singleMod(mod.mealOrderDeliveryId)}>View</button>
                                                        </td>
                                                    </tr>

                                                )
                                            }



                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h1 class="alert-message">Sorry. There is no delivering Meals!!! </h1>
                            )
                        }

                    </div>
                </div>

                <div class="mod_row_1">

                    <div class="admin_mod">
                        <h3 class="admin_h3">Completed Meal List</h3>
                        <div class="tbl-header">
                            <table cellpadding="0" className='table' cellspacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th id="admin_th">ID</th>
                                        <th id="admin_th">Meal Name </th>
                                        <th id="admin_th">Order Status </th>
                                        <th id="admin_th">Food Status </th>
                                        <th id="admin_th">Is Care Giver?</th>
                                        <th id="admin_th">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {
                            this.state.completedMODs.length > 0 ? (
                                <div class="tbl-content">
                                    <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                        <tbody>
                                            {
                                                this.state.completedMODs.map(mod =>
                                                    <tr key={mod.mealOrderDeliveryId}>
                                                        <td id="admin_td">{mod.mealOrderDeliveryId}</td>
                                                        <td id="admin_td">{mod.dish.dishName}</td>
                                                        <td id="admin_td">{mod.modStatus}</td>
                                                        <td id="admin_td">{mod.foodStatus}</td>
                                                        {
                                                            JSON.stringify(mod.careGiver) === 'true' ?
                                                                <td class="admin_td">Yes</td>
                                                                : <td class="admin_td">No</td>
                                                        }
                                                        <td id="admin_td">
                                                            <button type="button" class="view" onClick={() => this.singleMod(mod.mealOrderDeliveryId)}>View</button>
                                                        </td>
                                                    </tr>

                                                )
                                            }



                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h1 class="alert-message">Sorry. There is no completed Meals!!! </h1>
                            )
                        }

                    </div>
                </div>
                <div className='user-btn-div' id='btn-dish-status'>
                    <button class="user-back-btn" role="button" onClick={this.goBack}>Back</button>
                </div>
            </>
        )
    }
}

export default MOD