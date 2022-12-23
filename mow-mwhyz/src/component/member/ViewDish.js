import React, { Component } from 'react'
import { getSingleApprovedDishes, mealOrder } from '../../service/Service';
import './ViewDish.css'


class ViewDish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: {},
            did: this.props.match.params.id,
            menu: "",
            showPopup: false,
            dishprofileImage: ""
        }
    }

    componentDidMount() {
        getSingleApprovedDishes(this.state.did)

            .then(response => {
                this.setState({
                    dishes: response,
                    menu: response.dishMenu,
                    dishprofileImage: response.profileImage
                })

            })

    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    goBack = () => {
        this.props.history.push(`/member`)
    }
    render() {
        return (
            <>
                <div class="view-meal-body">
                    <h1 class="view-meal-title">{this.state.dishes.dishName}</h1>
                    <div class="view-meal-row">
                        <div class="view-meal-left">
                            <div class="view-meal-info">
                                <h3 class="view-head">Calorie:</h3>
                                <p class="view-data">{this.state.dishes.calorie}</p>
                            </div>
                            <div class="view-meal-info">
                                <h3 class="view-head">Sugar:</h3>
                                <p class="view-data">{this.state.dishes.sugar}</p>
                            </div>
                            <div class="view-meal-info">
                                <h3 class="view-head">Fat:</h3>
                                <p class="view-data">{this.state.dishes.fat}</p>
                            </div>
                            <div class="view-meal-info">
                                <h3 class="view-head">Fibre:</h3>
                                <p class="view-data">{this.state.dishes.fibre}</p>
                            </div>
                            <div class="view-meal-info">
                                <h3 class="view-head">Protein:</h3>
                                <p class="view-data">{this.state.dishes.protein}</p>
                            </div>
                            <div class="view-meal-info">
                                <h3 class="view-head">Carbonhydrates:</h3>
                                <p class="view-data">{this.state.dishes.carbs}</p>
                            </div>

                        </div>
                        <div class="view-meal-right">

                            <img src={"http://localhost:8080/merry/image/" + this.state.dishprofileImage.id}
                                class="view-meal-img" alt="" />
                        </div>
                    </div>
                </div>

                <div class="view-meal-main">
                    <div class="view-meal-main-left">
                        <h2 class="view-main-info">Suggestion</h2>

                        <h3 class="view-main-data">{this.state.dishes.suggestion}</h3>
                        <div class="view-back-div">
                            <button class="view-back-btn" onClick={this.goBack}>BACK</button>
                        </div>
                    </div>
                    <div class="view-meal-main-right">
                        <h2 class="view-main-info">Description</h2>

                        <h3 class="view-main-data">{this.state.dishes.dishDescription}</h3>
                        <div class="view-order-div">
                            <button class="view-order-btn" onClick={this.togglePopup.bind(this)}>ORDER</button>

                            {this.state.showPopup ?

                                <PopUp
                                    text='Close Me'
                                    closePopup={this.togglePopup.bind(this)}
                                    partnerId={this.state.menu.menuId}
                                    dishId={this.state.dishes.dishId}
                                />


                                : null
                            }

                        </div>
                    </div>

                </div>
            </>
        )
    }

}


class PopUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isCareGiver: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    orderDish = () => {
        const dish = Object.assign({}, this.state);
        //Product is saved (can check in console)
        console.log("Save Product from Component" + JSON.stringify(dish))
        mealOrder(dish)
            .then((response) => {
                alert("Ordered")
                window.location.reload()
                console.log("Save Product" + JSON.stringify(response))
                this.props.history.push(`/userMOD`)
            })
    }

    handleSubmit(event) {
        event.preventDefault();

        let dish = {
            partnerId: this.props.partnerId,
            dishId: this.props.dishId,
            careGiver: this.state.isCareGiver
        }
        //Product is saved (can check in console)
        console.log("Save Product from Component" + JSON.stringify(dish))
        mealOrder(dish)
            .then((response) => {
                alert("Ordered")
                window.location.reload(false)
                console.log("Save Product" + JSON.stringify(response))
                this.props.history.push(`/member`)
            })
    }

    render() {

        return (
            <>
                <div class="order-show-box">
                    <button class="close-btn" onClick={this.props.closePopup}>X</button>

                    <form class="view-order-form" onSubmit={this.handleSubmit}>

                        <label for="view-order-radio-option" class="view-order-form-label">Need Care Giver? </label>
                        <div class="view-order-radio-option">

                            <div class="radio-left-yes">
                                <input type="radio" id="radio-yes" name="isCareGiver" value="true" onChange={this.handleInputChange}></input>
                                <label for="radio-yes">Yes</label>
                            </div>
                            <div class="radio-right-no">
                                <input type="radio" id="radio-no" name="isCareGiver" value="false" onChange={this.handleInputChange}></input>
                                <label for="radio-no">No</label>
                            </div>
                        </div>
                        <input type="submit" value="Order Now" class="order-now-btn" onClick={this.orderDish} />
                    </form>
                </div>
            </>
        )
    }
}


export default ViewDish