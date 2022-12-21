import React, { Component } from 'react'
import './AdminHome.css'

import {
    approvedMember, getPendingMember, getAllMember,
    getPendingPartner, getAllPartner,
    getPendingVolunteer, getAllVolunteer, getApprovedPartner, getApprovedMember, getApprovedVolunteer,
} from '../../service/Service';

export class AdminHome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            members: [],
            allMembers: [],
            approvedMembers: [],
            partners: [],
            allPartners: [],
            approvedPartners: [],
            volunteers: [],
            allVolunteers: [],
            approvedVolunteers: [],
            volunteerIsCareGiver: "",

        }
        console.log(props);
    }


    componentDidMount() {

        getPendingMember()
            .then((response) => {
                this.setState({
                    members: response
                })
            })

        getAllMember()
            .then((response) => {
                this.setState({
                    allMembers: response
                })
            })

        getApprovedMember()
            .then((response) => {
                this.setState({
                    approvedMembers: response
                })
            })

        getPendingPartner()
            .then((response) => {
                this.setState({
                    partners: response
                })
            })

        getAllPartner()
            .then((response) => {
                this.setState({
                    allPartners: response
                })
            })

        getApprovedPartner()
            .then((response) => {
                this.setState({
                    approvedPartners: response
                })
            })

        getPendingVolunteer()
            .then((response) => {
                this.setState({
                    volunteers: response
                })
            })

        getAllVolunteer()
            .then((response) => {
                this.setState({
                    allVolunteers: response
                })
            })

        getApprovedVolunteer()
            .then((response) => {
                this.setState({
                    approvedVolunteers: response
                })
            })

    }

    approveMember = (email) => {
        let member = {
            userEmail: email,
            userStatus: "APPROVED"
        }
        console.log(member)
        approvedMember(member)
            .then(response => {
                console.log("Save Product" + JSON.stringify(response))
            })
    }


    getMember = (id) => {
        this.props.history.push(`/getMember/${id}`)
    }

    getAllMembers = () => {
        this.props.history.push(`/getAllMembers`)
    }

    getPartner = (id) => {
        this.props.history.push(`/getPartner/${id}`)
    }

    getAllPartners = () => {
        this.props.history.push(`/getAllPartners`)
    }

    getVolunteer = (id) => {
        this.props.history.push(`/getVolunteer/${id}`)
    }

    getAllVolunteers = () => {
        this.props.history.push(`/getAllVolunteers`)
    }

    render() {
        return (
            <>
                <div className='admin_main'>
                    <h1 class="admin_home_h1">Member List</h1>
                    <div class="all-meal-btn-div">
                        <button class="all-meal-btn" role="button" onClick={() => this.getAllMembers()}>All Members</button>
                    </div>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending member</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" className='table' cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id" id="admin_th">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
                                            <th id="admin_th">Condition </th>
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
                                            this.state.members.map(member =>
                                                <tr key={member.id}>
                                                    <td id="admin_td" class="table_id">{member.id}</td>
                                                    <td id="admin_td">{member.memberName}</td>
                                                    <td id="admin_td">{member.email}</td>
                                                    <td id="admin_td">{member.memberCondition}</td>
                                                    <td id="admin_td">{member.memberStatus}</td>
                                                    <td id="admin_td">
                                                        <button type="button" class="approve" onClick={
                                                            () => {
                                                                this.approveMember(member.email);
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
                            <h3 class="admin_h3">Approved member</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                    <thead>
                                        <tr>
                                            <th class="table_id" id="admin_th">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
                                            <th id="admin_th">Condition </th>
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
                                            this.state.approvedMembers.map(member =>
                                                <tr>
                                                    <td id="admin_td" class="table_id">{member.id}</td>
                                                    <td id="admin_td">{member.memberName}</td>
                                                    <td id="admin_td">{member.email}</td>
                                                    <td id="admin_td">{member.memberCondition}</td>
                                                    <td id="admin_td">{member.memberStatus}</td>
                                                    <td id="admin_td">
                                                        <button type="button" class="view" onClick={() => this.getMember(member.id)}>View</button>
                                                    </td>

                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <h1 class="admin_home_h1">Partner List</h1>
                    <div class="all-meal-btn-div">
                        <button class="all-meal-btn" role="button" onClick={() => this.getAllPartners()}>All Partners</button>
                    </div>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending partner</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                    <thead>
                                        <tr>
                                            <th id="admin_th" class="table_id">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
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
                                            this.state.partners.map(partner =>
                                                <tr key={partner.id}>
                                                    <td id="admin_td" class="table_id">{partner.id}</td>
                                                    <td id="admin_td">{partner.partnerName}</td>
                                                    <td id="admin_td">{partner.email}</td>
                                                    <td id="admin_td">{partner.partnerStatus}</td>
                                                    <td id="admin_td">
                                                        <button type="button" class="approve" onClick={
                                                            () => {
                                                                this.approveMember(partner.email)
                                                                window.location.reload(false)
                                                            }
                                                        }>APPROVE</button>
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="admin_col_2">
                            <h3 class="admin_h3">Approved partner</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                    <thead>
                                        <tr>
                                            <th id="admin_th" class="table_id">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
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
                                            this.state.approvedPartners.map(partner =>
                                                <tr key={partner.id}>
                                                    <td id="admin_td" class="table_id">{partner.id}</td>
                                                    <td id="admin_td">{partner.partnerName}</td>
                                                    <td id="admin_td">{partner.email}</td>
                                                    <td id="admin_td">{partner.partnerStatus}</td>
                                                    <td id="admin_td">
                                                        <button type="button" class="view" onClick={() => this.getPartner(partner.id)}>View</button>
                                                    </td>
                                                </tr>
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h1 class="admin_home_h1">Volunteer List</h1>
                    <div class="all-meal-btn-div">
                        <button class="all-meal-btn" role="button" onClick={() => this.getAllVolunteers()}>All Volunteers</button>
                    </div>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending volunteer</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                    <thead>
                                        <tr>
                                            <th id="admin_th" class="table_id">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
                                            <th id="admin_th">IsCareGiver?</th>

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
                                            this.state.volunteers.map(volunteer =>
                                                <tr key={volunteer.id}>
                                                    <td id="admin_td" class="table_id">{volunteer.id}</td>
                                                    <td id="admin_td">{volunteer.volunteerName}</td>
                                                    <td id="admin_td">{volunteer.email}</td>
                                                    {
                                                        JSON.stringify(volunteer.volunteerIsCareGiver) === 'true' ?
                                                            <td id='isCareGiver'>Yes</td>
                                                            : <td id='isCareGiver'>No</td>
                                                    }


                                                    <td id="admin_td">{volunteer.volunteerStatus}</td>

                                                    <td id="admin_td">
                                                        <button type="button" class="approve" onClick={
                                                            () => {
                                                                this.approveMember(volunteer.email)
                                                                window.location.reload(false)
                                                            }
                                                        }>APPROVE</button>
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="admin_col_2">
                            <h3 class="admin_h3">Approved volunteer</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0" className='table'>
                                    <thead>
                                        <tr>
                                            <th id="admin_th" class="table_id">Id</th>
                                            <th id="admin_th">Name</th>
                                            <th id="admin_th">Email </th>
                                            <th id="admin_th">IsCareGiver? </th>
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

                                            this.state.approvedVolunteers.map(volunteer =>
                                                <tr key={volunteer.id}>
                                                    <td id="admin_td" class="table_id">{volunteer.id}</td>
                                                    <td id="admin_td">{volunteer.volunteerName}</td>
                                                    <td id="admin_td">{volunteer.email}</td>
                                                    {
                                                        JSON.stringify(volunteer.volunteerIsCareGiver) === 'true' ?
                                                            <td id='isCareGiver'>Yes</td>
                                                            : <td id='isCareGiver'>No</td>
                                                    }
                                                    <td id="admin_td">{volunteer.volunteerStatus}</td>

                                                    <td id="admin_td">
                                                        <button type="button" class="view" onClick={() => this.getVolunteer(volunteer.id)}>View</button>
                                                    </td>
                                                </tr>
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminHome