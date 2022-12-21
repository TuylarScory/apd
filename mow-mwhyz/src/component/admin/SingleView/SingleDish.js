import React, { Component } from 'react'
import { getSingleDishes } from '../../../service/Service';
import './DetailPageStyle.css'

export class SingleDish extends Component {

    constructor(props) {
        super(props)

        this.state = {
            did: this.props.match.params.id,
            dishes: {},
            profileImage: ""
        }
    }

    componentDidMount() {

        getSingleDishes(this.state.did)

            .then(response => {
                this.setState({
                    dishes: response,
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

                <h1 className='single_h1'>Meal Detail </h1>
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
                                    <th className='single_table_th'>{this.state.dishes.dishId}</th>
                                </tr>


                                <tr>
                                    <td className='single_table_td'>Name</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.dishName}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Calorie</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.calorie}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Fat</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.fat}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Sugar</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.sugar}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Carbohydrate</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.carbs}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Fibre</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.fibre}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Protein</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.protein}</th>
                                </tr>
                                <tr>
                                    <td className='single_table_td'>Suggestion</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.suggestion}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Description</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.dishDescription}</th>
                                </tr>

                                <tr>
                                    <td className='single_table_td'>Status</td>
                                    <td>:</td>
                                    <th className='single_table_th'>{this.state.dishes.dishStatus}</th>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
            </>
        )
    }
}

export default SingleDish