import React, { Component } from 'react'
import { getSingleVolunteer } from '../../../service/Service';
import './DetailPageStyle.css'

export class SingleVolunteer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            volunteers: {},
            vid: this.props.match.params.id,
            profileImage: ""
        }

    }

    componentDidMount() {
        getSingleVolunteer(this.state.vid)

            .then(response => {
                this.setState({
                    volunteers: response,
                    profileImage: response.profileImage
                })

            });

    }


    goBack = () => {
        this.props.history.push(`/getAllVolunteers`)
    }

    render() {

        return (

            <>
                <h1 className='single_h1'>Volunteer Detail </h1>
                <div className="single_main">
                    <div className='single_img'>
                        <img src={"http://localhost:8080/merry/image/" + this.state.profileImage.id} id="profile_img"></img>
                        <div className='single_btn_div'>
                            <button class="single_button" role="button" onClick={this.goBack}>Back</button>
                        </div>
                    </div>
                    <div className="single_card">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table className="single_table">
                            <tbody>

                                <tr>
                                    <td className='single_table_td'>ID</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.id}</th>
                                </tr>


                                <tr>
                                    <td className='single_table_td'>Name</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerName}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Age</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerAge}</th>
                                </tr>

                                <tr>
                                    <td>Is Care Giver</td>
                                    <td>:</td>
                                    {
                                        JSON.stringify(this.state.volunteers.volunteerIsCareGiver) === 'true' ?
                                            <th className='single_table_th'>Yes</th>
                                            : <th className='single_table_th'>No</th>
                                    }

                                </tr>

                                <tr>
                                    <td className='single_table_td'>Email</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.email}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Phone Number</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerPhoneNo}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Address</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerLocationByAddress}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_th'>Role</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerROLE}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Status</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerStatus}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Created Date</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.volunteers.volunteerCreatedOn}</th>
                                </tr>


                            </tbody>

                        </table>
                    </div>

                </div>
            </>
        )
    }
}

export default SingleVolunteer