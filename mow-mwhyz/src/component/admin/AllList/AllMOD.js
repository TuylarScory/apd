import React, { Component } from 'react'
import { viewAllMOD } from '../../../service/Service';
import './All.css'

export class AllMOD extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allMods: [],

        }
        console.log(props);
    }

    componentDidMount() {

        viewAllMOD()
            .then((response) => {
                this.setState({
                    allMods: response
                })
            })
    }


    goBack = () => {
        this.props.history.push(`/getMOD`)
    }

    singleMod = (id) => {
        this.props.history.push(`/orderDetail/${id}`)
    }

    render() {

        let topBtn = document.getElementById("top-btn");


        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        }

        function toTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        return (
            <>
                <div class="user-all-main">
                    <h1 class="user-title">Orders</h1>
                    <table class="user-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="user-th" title="All IDs are sorted by latest Order">ID</th>
                                <th class="user-th">Meal Name</th>
                                <th class="user-th">Order Status</th>
                                <th class="user-th">Food Status</th>
                                <th class="user-th">Is Care Giver?</th>
                                <th class="user-th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.state.allMods.map(mod =>

                                    <tr class="user-tr" >
                                        <td class="user-td" title="All IDs are sorted by latest Order">{mod.mealOrderDeliveryId}</td>
                                        <td class="user-td">{mod.dish.dishName}</td>
                                        <td class="user-td">{mod.modStatus}</td>
                                        <td class="user-td">{mod.foodStatus}</td>
                                        {
                                            JSON.stringify(mod.careGiver) === 'true' ?
                                                <td class="user-td">Yes</td>
                                                : <td class="user-td">No</td>
                                        }

                                        <td class="user-td">
                                            <button class="user-btn" onClick={() => this.singleMod(mod.mealOrderDeliveryId)}>VIEW</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className='user-btn-div'>
                        <button class="user-back-btn" role="button" onClick={this.goBack}>Back</button>
                    </div>
                    <div>
                        <button onClick={toTop} id="top-btn"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></button>
                    </div>
                </div>

            </>
        )
    }
}

export default AllMOD