import React, { Component } from 'react'
import Alert from 'react-s-alert';
import { Redirect } from 'react-router-dom'
import './AddAdmin.css'

export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';


class AddAdmin extends Component {
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


                <Admin {...this.props} />

            </div>
        )
    }
}

class Admin extends Component {

    fileSelectedHandler = event => {

        var preview = document.getElementById('admin_img_output');

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

            adminName: '',
            email: '',
            adminPassword: '',
            profileImage: "",
            image_preview: "",
            name: "",
            imagePath: "",
            type: ""
        }



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleInputChange(event) {



        const target = event.target;
        const admin = target.name;
        const inputValue = target.value;

        this.setState({

            [admin]: inputValue,

        });

    }

    handleSubmit(event) {
        event.preventDefault();

        var adminData = {
            adminName: this.state.adminName,
            email: this.state.email,
            adminPassword: this.state.adminPassword,
        }
        var fileData = {
            name: this.state.name,
            imagePath: this.state.imagePath,
            type: this.state.type
        }
        var formData = new FormData()
        let admin = Object.assign({}, adminData)
        let files = this.state.profileImage
        console.log(files);


        formData.append('user', JSON.stringify(admin));  //should be user in next version 2
        formData.append('file', files)
        formData.append('name', fileData.name)
        formData.append('type', fileData.type)



        if (localStorage.getItem(ACCESS_TOKEN)) {

            const token = localStorage.getItem(ACCESS_TOKEN)

            console.log(token);

            fetch(API_BASE_URL + '/merry/register/admin', {

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
            console.log("Admin Data Adding Error");
        }


    }


    render() {
        return (
            <div className='admin-form-box'>
                <div class="admin_title_container">
                    <h2 id='admin_register_h2'>Add New Admin</h2>
                </div>
                <div class="admin_image_box">
                    <h3 class="admin_image_text">Please only upload photo under 1Mb!!!</h3>
                    <div class="admin_input_field " id="for_admin_image">
                        <p><input type="file" accept="/" id="file" style={{ display: "none" }} name="profileImage" onChange={this.fileSelectedHandler} /></p>
                        <p><label for="file" class="admin_img_label">Upload Profile</label></p>
                        <img id="admin_img_output" />
                    </div>
                </div>
                <div className='admin_input-group' id='admin'>
                    <div class="admin_form_wrapper" >
                        <div class="admin_form_container">

                            <div class="admin_row clearfix">
                                <div class="">
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="admin_input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                            <input type="text" name="adminName" placeholder="Name" maxLength="64" value={this.state.adminName} onChange={this.handleInputChange} required></input>
                                        </div>


                                        <div class="admin_input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                            <input type="email" name="email" placeholder="Email" maxLength="64" value={this.state.email} onChange={this.handleInputChange} required></input>
                                        </div>

                                        <div class="admin_input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                            <input type="password" name="adminPassword" placeholder="Password" value={this.state.adminPassword} onChange={this.handleInputChange} minLength="8" required></input>
                                        </div>



                                        <input className="admin_button" type="submit" onClick={this.checkButton} value="Register" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAdmin