import React, { Component } from 'react'
import { getSinglePartner } from '../../../service/Service';
import './DetailPageStyle.css'

export class SinglePartner extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partners: {},
            pid: this.props.match.params.id,
            profileImage: ""
        }
    }

    componentDidMount() {
        getSinglePartner(this.state.pid)

            .then(response => {
                this.setState({
                    partners: response,
                    profileImage: response.profileImage
                })
            })

    }

    goBack = () => {
        this.props.history.push(`/getAllPartners`)
    }

    render() {
        return (
            <>

                <h1 className='single_h1'>Partner Detail </h1>
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
                                    <th className='single_table_th'>{this.state.partners.id}</th>
                                </tr>


                                <tr>
                                    <td className='single_table_td'>Name</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerName}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Email</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.email}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Phone Number</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerPhoneNo}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Address</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerLocationByAddress}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Role</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerRole}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Status</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerStatus}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Created Date</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.partners.partnerCreatedOn}</th>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
            </>
        )
    }
}

export default SinglePartner