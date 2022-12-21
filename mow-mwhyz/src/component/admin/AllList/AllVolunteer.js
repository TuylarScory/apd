import React, { Component } from 'react'
import { getAllVolunteer } from '../../../service/Service';
import './All.css'

export class AllVolunteer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allVolunteers: [],

        }
        console.log(props);
    }

    componentDidMount() {

        getAllVolunteer()
            .then((response) => {
                this.setState({
                    allVolunteers: response
                })
            })
    }

    getVolunteer = (id) => {
        this.props.history.push(`/getVolunteer/${id}`)
    }

    goBack = () => {
        this.props.history.push(`/admin`)
    }

    render() {
        return (
            <>
                <div class="user-all-main">
                    <h1 class="user-title">Members</h1>
                    <table class="user-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="user-th">ID</th>
                                <th class="user-th">Name</th>
                                <th class="user-th">Email</th>
                                <th class="user-th">IsCareGiver?</th>
                                <th class="user-th">Status</th>
                                <th class="user-th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allVolunteers.map(volunteer =>
                                    <tr class="user-tr" key={volunteer.id}>
                                        <td class="user-td">{volunteer.id}</td>
                                        <td class="user-td">{volunteer.volunteerName}</td>
                                        <td class="user-td">{volunteer.email}</td>
                                        {
                                            JSON.stringify(volunteer.volunteerIsCareGiver) === 'true' ?
                                                <td class="user-td">Yes</td>
                                                : <td class="user-td">No</td>
                                        }
                                        <td class="user-td">{volunteer.volunteerStatus}</td>
                                        <td class="user-td">
                                            <button class="user-btn" onClick={() => this.getVolunteer(volunteer.id)}>VIEW</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className='user-btn-div'>
                        <button class="user-back-btn" role="button" onClick={this.goBack}>Back</button>
                    </div>
                </div>

            </>
        )
    }
}

export default AllVolunteer