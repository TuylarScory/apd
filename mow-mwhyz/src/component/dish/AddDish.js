import React, { Component } from 'react'
import Alert from 'react-s-alert';
import { Redirect } from 'react-router-dom'
import './AddDish.css'


export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';


 class AddDish extends Component {
    
    render() {

        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div className="signup-container">


            <Dish {...this.props} />

        </div>
        )
    }
}

class Dish extends Component {

    
    fileSelectedHandler = event => {

        var preview = document.getElementById('dish_img_output');

        preview.src = URL.createObjectURL(event.target.files[0])
        var img_file = event.target.files[0]

        this.setState({
            imagePath: img_file,
            profileImage: img_file,
            name: img_file["name"],
            type: img_file["type"],
        })

    }

    constructor(props) {

        super(props);

        this.state = {

            dishName: "",
            calorie: "",
            fat: "",
            sugar: "",
            carbs: "",
            fibre: "",
            protein: "",
            suggestion: "",
            dishDescription: "",
            profileImage: "",
            name: "",
            imagePath: "",
            type: ""
        }



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleInputChange(event) {



        const target = event.target;
        const dish = target.name;
        const inputValue = target.value;

        this.setState({

            [dish]: inputValue,

        });

    }

    handleSubmit(event) {
        event.preventDefault();

        var dishData = {

            dishName: this.state.dishName,
            calorie: this.state.calorie,
            fat: this.state.fat,
            sugar: this.state.sugar,
            carbs: this.state.carbs,
            fibre: this.state.fibre,
            protein: this.state.protein,
            suggestion: this.state.suggestion,
            dishDescription: this.state.dishDescription,
        }
        var fileData = {
            name: this.state.name,
            imagePath: this.state.imagePath,
            type: this.state.type
        }
        var formData = new FormData()
        let dish = Object.assign({}, dishData)
        let files = this.state.profileImage
        console.log(files);


        formData.append('dish', JSON.stringify(dish));  //should be user in next version 2
        formData.append('file', files)
        formData.append('name', fileData.name)
        formData.append('type', fileData.type)



        if (localStorage.getItem(ACCESS_TOKEN)) {

            const token = localStorage.getItem(ACCESS_TOKEN)

            console.log(token);

            fetch(API_BASE_URL + '/merry/partner/dish', {

                method: 'POST',
                headers: { "Authorization": `Bearer ${token}` },
                body: formData
            }).then(response => response.json())
                .then(response => {


                    Alert.success("You're successfully registered. Please login to continue!");
                    this.props.history.push("/");

                })
                .catch(error => {

                    Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');

                });
        } else {
            console.log("Dish Data Adding Error");
        }


    }

    render() {
        return (
            <>
                <div class="dish-container">
                    <div class="dish-title">
                        <h1>Add New Meals</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="dish-form">
                            
                            <div class="dish-left">
                                <h3 id="dish_img_text_alert">Please only upload image under 1MB!</h3>
                                <input type="file" id="dish_img_file" style={{display:"none"}} name="profileImage" onChange={this.fileSelectedHandler}/>
                                
                                <label for="dish_img_file" class="dish-img-label">+ </label>
                                <img id="dish_img_output" />
                                
                                

                            </div>
                            <div class="dish-right">
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-name">Meal Name</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-name" name="dishName" maxLength="64"  value={this.state.dishName}
                                            onChange={this.handleInputChange} required></input>
                                    </div>


                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-calorie">Calorie</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-calorie" name="calorie" maxLength="64"  value={this.state.calorie}
                                            onChange={this.handleInputChange} required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-fat">Fat</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-fat" name="fat" maxLength="64"  value={this.state.fat} onChange={this.handleInputChange}
                                            required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-sugar">Sugar</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-sugar" name="sugar" maxLength="64"  value={this.state.sugar} onChange={this.handleInputChange}
                                            required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-carbs">Carbohydrate</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-carbs" name="carbs" maxLength="64"  value={this.state.carbs} onChange={this.handleInputChange}
                                            required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-fibre">Fiber</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-fibre" name="fibre" maxLength="64"  value={this.state.fibre} onChange={this.handleInputChange}
                                            required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-protein">Protein</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-protein" name="protein" maxLength="64"  value={this.state.protein}
                                            onChange={this.handleInputChange} required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-suggestion">Suggestion</label>
                                    </div>
                                    <div class="input_right">
                                        <input type="text" id="dish-suggestion" name="suggestion" maxLength="64"  value={this.state.suggestion}
                                            onChange={this.handleInputChange} required></input>
                                    </div>
                                </div>
                                <div class="dish_input_field">
                                    <div class="input_left">
                                        <label for="dish-desc">Description</label>
                                    </div>
                                    <div class="input_right">
                                        <textarea id="dish-desc" name="dishDescription"  rows="4" required>{this.state.dishDescription}</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dish-button">
                            <input type="submit" value="Submit" class="dish_input_button" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AddDish