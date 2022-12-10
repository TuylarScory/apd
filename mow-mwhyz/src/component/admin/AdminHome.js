import React, { Component } from 'react'
import './AdminHome.css'

import {
    approvedMember, getPendingMember, getAllMember,
    getPendingPartner, getAllPartner,
    getPendingVolunteer, getAllVolunteer, getCurrentUser,
} from '../../service/Service';

export class AdminHome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            members: [],
            allMembers: [],
            partners: [],
            allPartners: [],
            volunteers: [],
            allVolunteers: [],
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
        this.props.history.push(`/get/${id}`)
    }

    getPartner = (id) => {
        this.props.history.push(`/getPartner/${id}`)
    }

    getVolunteer = (id) => {
        this.props.history.push(`/getVolunteer/${id}`)
    }

    addAdmin = () => {
        this.props.history.push(`/addAdmin`)
    }
    render() {
        return (
            <>
                <div className='admin_main'>
                    <h1 class="admin_home_h1">Member List</h1>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending member</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>Condition </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {
                                            this.state.members.map(member =>
                                                <tr key={member.id}>
                                                    <td class="table_id">{member.id}</td>
                                                    <td>{member.memberName}</td>
                                                    <td>{member.email}</td>
                                                    <td>{member.memberCondition}</td>
                                                    <td>{member.memberStatus}</td>
                                                    <td><button type="button" class="approve" onClick={
                                                        () => {
                                                            this.approveMember(member.email);
                                                        window.location.reload(false)}
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
                            <h3 class="admin_h3">All Member</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>Condition </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {
                                            this.state.allMembers.map(member =>
                                                <tr>
                                                    <td class="table_id">{member.id}</td>
                                                    <td>{member.memberName}</td>
                                                    <td>{member.email}</td>
                                                    <td>{member.memberCondition}</td>
                                                    <td>{member.memberStatus}</td>
                                                    <td><button type="button" class="view" onClick={() => this.getMember(member.id)}>View</button></td>

                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <h1 class="admin_home_h1">Partner List</h1>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending partner</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>Role </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {
                                            this.state.partners.map(partner =>
                                                <tr key={partner.id}>
                                                    <td class="table_id">{partner.id}</td>
                                                    <td>{partner.partnerName}</td>
                                                    <td>{partner.email}</td>
                                                    <td>{partner.partnerRole}</td>
                                                    <td>{partner.partnerStatus}</td>
                                                    <td><button type="button" class="approve" onClick={() => this.approveMember(partner.email)}>APPROVE</button>
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="admin_col_2">
                            <h3 class="admin_h3">All partner</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>Role </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {
                                            this.state.allPartners.map(partner =>
                                                <tr key={partner.id}>
                                                    <td class="table_id">{partner.id}</td>
                                                    <td>{partner.partnerName}</td>
                                                    <td>{partner.email}</td>
                                                    <td>{partner.partnerRole}</td>
                                                    <td>{partner.partnerStatus}</td>
                                                    <td>   <button type="button" class="view" onClick={() => this.getPartner(partner.id)}>View</button></td>
                                                </tr>
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h1 class="admin_home_h1">Volunteer List</h1>
                    <div class="admin_row_1">

                        <div class="admin_col_1">
                            <h3 class="admin_h3">Pending volunteer</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>IsCareGiver?</th>

                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {
                                            this.state.volunteers.map(volunteer =>
                                                <tr key={volunteer.id}>
                                                    <td class="table_id">{volunteer.id}</td>
                                                    <td>{volunteer.volunteerName}</td>
                                                    <td>{volunteer.email}</td>
                                                    {
                                            JSON.stringify(volunteer.volunteerIsCareGiver) === 'true' ?
                                            <td  className='isCareGiver'>Yes</td>
                                            : <td  className='isCareGiver'>No</td>
                                        }



                                                    {/* <td>{volunteer.volunteerROLE}</td> */}
                                                    <td>{volunteer.volunteerStatus}</td>

                                                    <td><button type="button" class="approve" onClick={() => this.approveMember(volunteer.email)}>APPROVE</button>
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="admin_col_2">
                            <h3 class="admin_h3">All volunteer</h3>
                            <div class="tbl-header">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th class="table_id">Id</th>
                                            <th>Name</th>
                                            <th>Email </th>
                                            <th>IsCareGiver? </th>
                                            <th>Status </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="tbl-content">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        {

                                            this.state.allVolunteers.map(volunteer =>
                                                <tr key={volunteer.id}>
                                                    <td class="table_id">{volunteer.id}</td>
                                                    <td>{volunteer.volunteerName}</td>
                                                    <td>{volunteer.email}</td>
                                                    {
                                            JSON.stringify(volunteer.volunteerIsCareGiver) === 'true' ?
                                            <td className='isCareGiver'>Yes</td>
                                            : <td  className='isCareGiver'>No</td>
                                        }
                                                    <td>{volunteer.volunteerStatus}</td>

                                                    <td>   <button type="button" class="view" onClick={() => this.getVolunteer(volunteer.id)}>View</button></td>
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