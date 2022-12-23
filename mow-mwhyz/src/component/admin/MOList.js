import React, { Component } from 'react'
import { viewSingleMOD } from '../../service/Service';
import '../Order/OrderList.css'

export class MOList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            type: this.props.match.params.type,
            id: this.props.match.params.id,
            mods: []
        }
    }

    componentDidMount() {
        viewSingleMOD(this.state.type, this.state.id)
            .then((response) => {
                this.setState({
                    mods: response
                })
            })
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
                <div class="user-mod-body">
                    <h2 class="user-mod-title">order list</h2>
                    {
                        this.state.mods.map(mod =>
                            <div class="user-mod-row" key={mod.mealOrderDeliveryId}>
                                <div class="user-mod-col">
                                    <div class="user-mod-first">
                                        <h4 class="user-mod-id">Order ID: {mod.mealOrderDeliveryId}</h4>
                                        {
                                            (() => {
                                                if (mod.modStatus === 'ORDERED') {
                                                    return (
                                                        <h4 class="user-mod-o-status">ORDERED</h4>
                                                    )
                                                } else if (mod.modStatus === 'DELIVERING') {
                                                    return (
                                                        <h4 class="user-mod-d-status">DELIVERING</h4>
                                                    )
                                                } else {
                                                    return (
                                                        <h4 class="user-mod-c-status">COMPLETED</h4>
                                                    )
                                                }
                                            })()

                                        }
                                    </div>
                                    <div class="user-mod-second">
                                        <div class="user-mod-col-1">
                                            <img src={"http://localhost:8080/merry/image/" + mod.dish.profileImage.id} class="mod-img" alt="" />
                                        </div>
                                        <div class="user-mod-col-2">
                                            <h3 class="user-mod-dish-title">{mod.dish.dishName}</h3>
                                            <p class="user-mod-dish-status">{mod.foodStatus}</p>

                                            {
                                                JSON.stringify(mod.careGiver) === 'true' ?
                                                    <h4>Need Care Giver</h4>
                                                    : <h4>Don't Need Care Giver</h4>
                                            }
                                        </div>
                                        <div class="user-mod-col-3">
                                            <h3><span class="user-mod-span">Member: </span>{mod.member.memberName}</h3>
                                            <h3><span class="user-mod-span">Shop: </span>{mod.partner.partnerName}</h3>
                                            <h3><span class="user-mod-span">Volunteer: </span>{mod.volunteer.volunteerName}</h3>
                                            <button type="button" class="user-mod-track-btn" onClick={() => this.singleMod(mod.mealOrderDeliveryId)}>TRACK</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )
                    }

                    <div>
                        <button onClick={toTop} id="top-btn"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default MOList