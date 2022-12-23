import React, { Component } from 'react'
import { getSingleMOD } from '../../service/Service';
import './OrderDetail.css'

class OrderDetail extends Component {


    render() {
        return (
            <>
                {
                    (() => {

                        if (this.props.currentUser.userRole === "PARTNER") {
                            return <POrderDetail {...this.props} />
                        }
                        else if (this.props.currentUser.userRole === "MEMBER") {
                            return <MOrderDetail {...this.props} />
                        }
                        else if (this.props.currentUser.userRole === "VOLUNTEER") {

                            return <VOrderDetail {...this.props} />
                        } else {
                            return <AOrderDetail {...this.props} />
                        }
                    })()
                }
            </>
        )
    }
}

// Order detail for member
class MOrderDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            singleMOD: {},
            partner: {},
            partnerProfileImage: "",
            volunteer: {},
            volunteerProfileImage: "",
            dish: {},
            dishImage: {},
            member: {}
        }
    }

    componentDidMount() {
        getSingleMOD(this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    singleMOD: response,
                    partner: response.partner,
                    partnerProfileImage: response.partner.profileImage,
                    volunteer: response.volunteer,
                    volunteerProfileImage: response.volunteer.profileImage,
                    dish: response.dish,
                    dishImage: response.dish.profileImage,
                    member: response.member
                })

            })
    }
    goBack = () => {
        this.props.history.push(`/orderList`)
    }
    render() {
        return (
            <>

                <div class="order-detail-main">
                    <div class="order-detail-box">
                        <h1 class="order-detail-title">Order Detail</h1>
                        <h3><span class="order-detail-span">Order ID:</span> {this.state.id}</h3>
                        <h3><span class="order-detail-span">Member Name:</span> {this.state.member.memberName}</h3>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEAL</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.dishImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.dish.dishName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Description:</span> </h3>
                                        <h3>{this.state.dish.dishDescription}</h3>
                                    </div></div>
                                <div class="detail-third">

                                    {
                                        (() => {
                                            if (this.state.singleMOD.modStatus === 'ORDERED') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-o">ORDERED</span></h3>
                                                )
                                            } else if (this.state.singleMOD.modStatuss === 'DELIVERING') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-d">DELIVERING</span></h3>
                                                )
                                            } else {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-c">COMPLETED</span></h3>
                                                )
                                            }
                                        })()

                                    }

                                    <h3><span class="order-detail-span">Food Status:</span> <span class="order-detail-foods">{this.state.singleMOD.foodStatus}</span></h3>
                                    {
                                        JSON.stringify(this.state.singleMOD.careGiver) === 'true' ?
                                            <h3><span class="order-detail-span">Need Care Giver:</span> Yes</h3>
                                            : <h3><span class="order-detail-span">Need Care Giver:</span> No</h3>
                                    }

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">PARTNER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.partnerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.partner.partnerName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.partner.partnerLocationByAddress}</h3>
                                    </div></div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.partner.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.partner.partnerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">VOLUNTEER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.volunteerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.volunteer.volunteerName}</h3>

                                    {
                                        JSON.stringify(this.state.volunteer.available) === 'true' ?
                                            <h3><span class="order-detail-span">Available:</span> Free</h3>
                                            : <h3><span class="order-detail-span">Available:</span> Busy</h3>
                                    }

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.volunteer.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.volunteer.volunteerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>

                        <div class='btn_div'>
                            <button class="detail-btn" role="button" onClick={this.goBack}>Back</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Order detail for partner
class POrderDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            singleMOD: {},
            partner: {},
            partnerProfileImage: "",
            volunteer: {},
            volunteerProfileImage: "",
            dish: {},
            dishImage: {},
            member: {},
            memberProfileImage: '',
        }
    }

    componentDidMount() {
        getSingleMOD(this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    singleMOD: response,
                    partner: response.partner,
                    partnerProfileImage: response.partner.profileImage,
                    volunteer: response.volunteer,
                    volunteerProfileImage: response.volunteer.profileImage,
                    dish: response.dish,
                    dishImage: response.dish.profileImage,
                    member: response.member,
                    memberProfileImage: response.member.profileImage,
                })

            })
    }
    goBack = () => {
        this.props.history.push(`/orderList`)
    }
    render() {
        return (
            <>

                <div class="order-detail-main">
                    <div class="order-detail-box">
                        <h1 class="order-detail-title">Order Detail</h1>
                        <h3><span class="order-detail-span">Order ID:</span> {this.state.id}</h3>
                        <h3><span class="order-detail-span">Member Name:</span> {this.state.member.memberName}</h3>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEAL</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.dishImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.dish.dishName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Description:</span> </h3>
                                        <h3>{this.state.dish.dishDescription}</h3>
                                    </div></div>
                                <div class="detail-third">

                                    {
                                        (() => {
                                            if (this.state.singleMOD.modStatus === 'ORDERED') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-o">ORDERED</span></h3>
                                                )
                                            } else if (this.state.singleMOD.modStatuss === 'DELIVERING') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-d">DELIVERING</span></h3>
                                                )
                                            } else {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-c">COMPLETED</span></h3>
                                                )
                                            }
                                        })()

                                    }

                                    <h3><span class="order-detail-span">Food Status:</span> <span class="order-detail-foods">{this.state.singleMOD.foodStatus}</span></h3>
                                    {
                                        JSON.stringify(this.state.singleMOD.careGiver) === 'true' ?
                                            <h3><span class="order-detail-span">Need Care Giver:</span> Yes</h3>
                                            : <h3><span class="order-detail-span">Need Care Giver:</span> No</h3>
                                    }

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEMBER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.memberProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.member.memberName}</h3>
                                    <h3><span class="order-detail-span">Condition:</span> {this.state.member.memberCondition}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.member.memberLocationByAddress}</h3>
                                    </div>

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.member.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.member.memberPhoneNo}</h3>

                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Conditon Description:</span> </h3>
                                        <h3>{this.state.member.memberCondDescription}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">VOLUNTEER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.volunteerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.volunteer.volunteerName}</h3>

                                    {
                                        JSON.stringify(this.state.volunteer.available) === 'true' ?
                                            <h3><span class="order-detail-span">Available:</span> Free</h3>
                                            : <h3><span class="order-detail-span">Available:</span> Busy</h3>
                                    }

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.volunteer.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.volunteer.volunteerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>

                        <div class='btn_div'>
                            <button class="detail-btn" role="button" onClick={this.goBack}>Back</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Order detail for partner
class VOrderDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            singleMOD: {},
            partner: {},
            partnerProfileImage: "",
            volunteer: {},
            volunteerProfileImage: "",
            dish: {},
            dishImage: {},
            member: {},
            memberProfileImage: '',
        }
    }

    componentDidMount() {
        getSingleMOD(this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    singleMOD: response,
                    partner: response.partner,
                    partnerProfileImage: response.partner.profileImage,
                    volunteer: response.volunteer,
                    volunteerProfileImage: response.volunteer.profileImage,
                    dish: response.dish,
                    dishImage: response.dish.profileImage,
                    member: response.member,
                    memberProfileImage: response.member.profileImage,
                })

            })
    }
    goBack = () => {
        this.props.history.push(`/orderList`)
    }
    render() {
        return (
            <>

                <div class="order-detail-main">
                    <div class="order-detail-box">
                        <h1 class="order-detail-title">Order Detail</h1>
                        <h3><span class="order-detail-span">Order ID:</span> {this.state.id}</h3>
                        <h3><span class="order-detail-span">Member Name:</span> {this.state.member.memberName}</h3>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEAL</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.dishImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.dish.dishName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Description:</span> </h3>
                                        <h3>{this.state.dish.dishDescription}</h3>
                                    </div></div>
                                <div class="detail-third">

                                    {
                                        (() => {
                                            if (this.state.singleMOD.modStatus === 'ORDERED') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-o">ORDERED</span></h3>
                                                )
                                            } else if (this.state.singleMOD.modStatuss === 'DELIVERING') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-d">DELIVERING</span></h3>
                                                )
                                            } else {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-c">COMPLETED</span></h3>
                                                )
                                            }
                                        })()

                                    }

                                    <h3><span class="order-detail-span">Food Status:</span> <span class="order-detail-foods">{this.state.singleMOD.foodStatus}</span></h3>
                                    {
                                        JSON.stringify(this.state.singleMOD.careGiver) === 'true' ?
                                            <h3><span class="order-detail-span">Need Care Giver:</span> Yes</h3>
                                            : <h3><span class="order-detail-span">Need Care Giver:</span> No</h3>
                                    }

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEMBER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.memberProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.member.memberName}</h3>
                                    <h3><span class="order-detail-span">Condition:</span> {this.state.member.memberCondition}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.member.memberLocationByAddress}</h3>
                                    </div>

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.member.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.member.memberPhoneNo}</h3>

                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Conditon Description:</span> </h3>
                                        <h3>{this.state.member.memberCondDescription}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">PARTNER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.partnerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.partner.partnerName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.partner.partnerLocationByAddress}</h3>
                                    </div></div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.partner.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.partner.partnerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>

                        <div class='btn_div'>
                            <button class="detail-btn" role="button" onClick={this.goBack}>Back</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Order detail for admin
class AOrderDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            singleMOD: {},
            partner: {},
            partnerProfileImage: "",
            volunteer: {},
            volunteerProfileImage: "",
            dish: {},
            dishImage: {},
            member: {},
            memberProfileImage: '',
        }
    }

    componentDidMount() {
        getSingleMOD(this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    singleMOD: response,
                    partner: response.partner,
                    partnerProfileImage: response.partner.profileImage,
                    volunteer: response.volunteer,
                    volunteerProfileImage: response.volunteer.profileImage,
                    dish: response.dish,
                    dishImage: response.dish.profileImage,
                    member: response.member,
                    memberProfileImage: response.member.profileImage,
                })

            })
    }

    goBack = () => {
        this.props.history.push(`/admin`)
    }


    render() {
        return (
            <>

                <div class="order-detail-main">
                    <div class="order-detail-box">
                        <h1 class="order-detail-title">Order Detail</h1>
                        <h3><span class="order-detail-span">Order ID:</span> {this.state.id}</h3>
                        <h3><span class="order-detail-span">Member Name:</span> {this.state.member.memberName}</h3>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEAL</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.dishImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.dish.dishName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Description:</span> </h3>
                                        <h3>{this.state.dish.dishDescription}</h3>
                                    </div></div>
                                <div class="detail-third">

                                    {
                                        (() => {
                                            if (this.state.singleMOD.modStatus === 'ORDERED') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-o">ORDERED</span></h3>
                                                )
                                            } else if (this.state.singleMOD.modStatuss === 'DELIVERING') {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-d">DELIVERING</span></h3>
                                                )
                                            } else {
                                                return (
                                                    <h3><span class="order-detail-span">Order Status:</span> <span class="order-detail-c">COMPLETED</span></h3>
                                                )
                                            }
                                        })()

                                    }

                                    <h3><span class="order-detail-span">Food Status:</span> <span class="order-detail-foods">{this.state.singleMOD.foodStatus}</span></h3>
                                    {
                                        JSON.stringify(this.state.singleMOD.careGiver) === 'true' ?
                                            <h3><span class="order-detail-span">Need Care Giver:</span> Yes</h3>
                                            : <h3><span class="order-detail-span">Need Care Giver:</span> No</h3>
                                    }

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">MEMBER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.memberProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.member.memberName}</h3>
                                    <h3><span class="order-detail-span">Condition:</span> {this.state.member.memberCondition}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.member.memberLocationByAddress}</h3>
                                    </div>

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.member.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.member.memberPhoneNo}</h3>

                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Conditon Description:</span> </h3>
                                        <h3>{this.state.member.memberCondDescription}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">PARTNER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.partnerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.partner.partnerName}</h3>
                                    <div class="detail-longtext">
                                        <h3><span class="order-detail-span ">Address:</span> </h3>
                                        <h3>{this.state.partner.partnerLocationByAddress}</h3>
                                    </div></div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.partner.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.partner.partnerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="order-detail">
                            <h3 class="order-detail-text">VOLUNTEER</h3>
                            <div class="detail-row">
                                <div class="detail-first">
                                    <img src={"http://localhost:8080/merry/image/" + this.state.volunteerProfileImage.id}
                                        class="detail-img" alt="" />
                                </div>
                                <div class="detail-second">
                                    <h3><span class="order-detail-span">Name:</span> {this.state.volunteer.volunteerName}</h3>

                                    {
                                        JSON.stringify(this.state.volunteer.available) === 'true' ?
                                            <h3><span class="order-detail-span">Available:</span> Free</h3>
                                            : <h3><span class="order-detail-span">Available:</span> Busy</h3>
                                    }

                                </div>
                                <div class="detail-third">
                                    <h3><span class="order-detail-span">Email:</span> {this.state.volunteer.email}</h3>
                                    <h3><span class="order-detail-span">Phone no:</span> {this.state.volunteer.volunteerPhoneNo}</h3>
                                </div>
                            </div>
                        </div>

                        <div class='btn_div'>
                            <button class="detail-btn" role="button" onClick={this.goBack}>Back</button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default OrderDetail