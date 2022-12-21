import React, { Component } from 'react'
import { getSingleMember } from '../../../service/Service';
import './DetailPageStyle.css'


export class SingleMember extends Component {

    constructor(props) {
        super(props)

        this.state = {
            members: {},
            mId: this.props.match.params.id,
            profileImage: ""
        }
    }

    componentDidMount() {
        getSingleMember(this.state.mId)
            .then(response => {
                this.setState({
                    members: response,
                    profileImage: response.profileImage

                })
            })

    }

    goBack = () => {
        this.props.history.push(`/getAllMembers`)
    }

    render() {
        return (
            <>

                <h1 className='single_h1'>Member Detail </h1>
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
                                    <th className='single_table_th'>{this.state.members.id}</th>
                                </tr>


                                <tr>
                                    <td className='single_table_td'>Name</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberName}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Email</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.email}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Phone Number</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberPhoneNo}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Age</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberAge}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Address</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberLocationByAddress}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Condition</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberCondition} </th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Condition Description</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberCondDescription} </th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Role</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberROLE}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Status</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberStatus}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Created Date</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.members.memberCreatedOn}</th>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
            </>
        )
    }
}

export default SingleMember