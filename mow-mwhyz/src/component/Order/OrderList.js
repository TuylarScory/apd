import React, { Component } from 'react'
import { getUserMOD, changeStatus } from '../../service/Service';
import './OrderList.css'

class OrderList extends Component {
    render() {
        return (
            <>
                {
                    (() => {

                        if (this.props.currentUser.userRole === "PARTNER") {
                            return <POrderList {...this.props} />
                        }
                        else if (this.props.currentUser.userRole === "MEMBER") {
                            return <MOrderList {...this.props} />
                        }
                        else if (this.props.currentUser.userRole === "VOLUNTEER") {

                            return <VOrderList {...this.props} />

                        }
                    })()
                }
            </>
        )
    }
}


class MOrderList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mods: []
        }
    }

    componentDidMount() {
        getUserMOD()
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
                    <h2 class="user-mod-title">My Orders</h2>
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

class POrderList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mods: []
        }
    }

    componentDidMount() {
        getUserMOD()
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
                    <h2 class="user-mod-title">Meal Order List</h2>
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

class VOrderList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mods: [],
            status: ""
        }
    }

    componentDidMount() {
        getUserMOD()
            .then((response) => {
                this.setState({
                    mods: response,
                    status: response.modStatus
                })
            })
    }

    changeStatus = (id, status) => {
        if (status === "ORDERED") {
            let status = {
                modId: id,
                modStatus: "DELIVERING"
            }
            console.log(status)
            changeStatus(status)
                .then(response => {
                    console.log("Save Product" + JSON.stringify(response))

                })

        }
        else if (status === "DELIVERING") {
            let status = {
                modId: id,
                modStatus: "COMPLETED"
            }
            console.log(status)
            changeStatus(status)
                .then(response => {
                    console.log("Save Product" + JSON.stringify(response))

                })

        }

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
                    <h2 class="user-mod-title">Meal Order List</h2>
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
                                            <button type="button" class="user-mod-status-btn" onClick={() => {
                                                this.changeStatus(mod.mealOrderDeliveryId, mod.modStatus)
                                                alert("Order Status Already Changed")
                                                window.location.reload()
                                            }
                                            }>CHANGE STATUS</button>
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
export default OrderList