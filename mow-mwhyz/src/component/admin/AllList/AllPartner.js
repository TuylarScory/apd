import React, { Component } from 'react'
import { getAllPartner } from '../../../service/Service';
import './All.css'

export class AllPartner extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allPartners: [],

        }
        console.log(props);
    }

    componentDidMount() {

        getAllPartner()
            .then((response) => {
                this.setState({
                    allPartners: response
                })
            })
    }

    getPartner = (id) => {
        this.props.history.push(`/getPartner/${id}`)
    }

    goBack = () => {
        this.props.history.push(`/admin`)
    }

    getDishStatus = (id) => {
        this.props.history.push(`/getMealStatus/${id}`)
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
                    <h1 class="user-title">Partners</h1>
                    <table class="user-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="user-th">ID</th>
                                <th class="user-th">Name</th>
                                <th class="user-th">Email</th>
                                <th class="user-th">Status</th>
                                <th class="user-th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allPartners.map(partner =>
                                    <tr class="user-tr" key={partner.id}>
                                        <td class="user-td">{partner.id}</td>
                                        <td class="user-td">{partner.partnerName}</td>
                                        <td class="user-td">{partner.email}</td>
                                        <td class="user-td">{partner.partnerStatus}</td>
                                        <td class="user-td">
                                            <button class="user-btn" onClick={() => this.getPartner(partner.id)}>VIEW</button>
                                            <button class="user-btn-dish" onClick={() => this.getDishStatus(partner.id)}>MEAL</button>
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

export default AllPartner