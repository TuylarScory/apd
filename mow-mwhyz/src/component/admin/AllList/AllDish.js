import React, { Component } from 'react'
import { getAllDishes } from '../../../service/Service'
import './All.css'

export class AllDish extends Component {

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            menu: [],
        }
    }

    componentDidMount() {
        getAllDishes(this.state.id)

            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({
                    menu: response

                })
            })

    }

    getDish = (id) => {
        this.props.history.push(`/getDish/${id}`)
    }

    goBack = () => {
        this.props.history.push(`/admin`)
    }

    
    render() {
        return (
            <>
                <div class="user-all-main">
                    <h1 class="user-title">Meals</h1>
                    <table class="user-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="user-th">ID</th>
                                <th class="user-th">Name</th>
                                <th class="user-th">Suggestion</th>
                                <th class="user-th">Status</th>
                                <th class="user-th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.menu.map(dish =>
                                    <tr key={dish.dishId} class="user-tr">
                                        <td class="user-td">{dish.dishId}</td>
                                        <td class="user-td">{dish.dishName}</td>
                                        <td class="user-td">{dish.suggestion}</td>
                                        <td class="user-td">{dish.dishStatus}</td>
                                        <td class="user-td">
                                            <button class="user-btn" onClick={() => this.getDish(dish.dishId)}>VIEW</button>
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

export default AllDish