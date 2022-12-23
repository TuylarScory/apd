import React, { Component } from 'react'
import contact from '../../img/Contact1.jpg'
import './Contact.css';

export class Contact extends Component {
    render() {
        return (

            <div class="body">
                <h1>Contact Us</h1>
                <div class="contact_body">
                    <div class="contact_img">
                        <img src={contact} alt="Image" />
                    </div>
                    <div class="contact_form">

                        <form action="" class="form">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." className='contact_text' />

                            <label for="phone">Phone</label>
                            <input type="number" id="phone" name="phone" placeholder="Your contact no.." className='contact_phone' />

                            <label for="email">Email</label>
                            <input type="mail" id="email" name="email" placeholder="Your email address ..." className='contact_mail' />

                            <label for="message">Message</label>
                            <textarea id="" name="subject" placeholder="Write something.." rows="7"></textarea>

                            <input type="submit" value="Submit" className="contact_submit" />
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

export default Contact