import React, { Component } from 'react'
import './landing.css';
import mission from '../img/mission.jpg'
import vision from '../img/Vision.png'
import donate from '../img/donate.jpg'
import contact from '../img/contactform.jpg'

export class landing extends Component {
    render() {
        return (
            <>
                <div class="body">

                    <div class="text">
                        <h2>Only get <i>Frozen Food</i></h2>
                        <h3>ON</h3>
                        <h2><b>Weekend</b></h2>
                    </div>


                    <div class="text2">
                        <div class="bg-image"></div>
                        <div class="text22">
                            <h1><span style={{'color': 'orange'}}>Together</span> We Will</h1>
                            <h2>Rebuild Our Future</h2>
                            <button><b><a href="/donate">Donate Now</a></b></button>
                        </div>
                    </div>

                    <div class="body2">
                        <div class="img1">
                            <img src={mission} style={{'width':'100%'}} />
                        </div>

                        <div class="text3">
                            <h2>Our Mission</h2>
                            <p>To alleviate hunger by providing reliable, consistent and sustainable
                                food support to the less-fortunate through food distribution programmes.</p>

                        </div>
                    </div>

                    <div class="body3">

                        <div class="text4">
                            <h2>Our Vission</h2>
                            <p>To be the leading charity in Myanmar <br />devoted to alleviating hunger
                                through efficient distribution of food.</p>
                        </div>

                        <div class="img2">
                            <img src={vision} style={{'width': '300px', 'height': '310px', 'margin-left': '-300px'}} />

                        </div>

                        <div class="img3" style={{'margin-right': '180px'}}>
                            <img src={donate} style={{'width': '200px', 'height': '100px'}} />
                            <img src={contact}
                                style={{'width': '200px', 'height': '200px', 'border-radius': '10px', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                        </div>

                    </div>
                    <div class="body3">
                        <div class="card">
                            <h1>VOLUNTEER</h1>
                            <p>We consider our volunteers<br />to be our greatesr asset <br />
                                need your help.</p>
                            <div class="container">
                                <button><a href="/register">Become a Volunteer</a></button>
                            </div>
                        </div>
                        <div class="card2">
                            <h1>DONATE</h1>
                            <p>Make sure our members are not forgoteen. <br />
                                Please donate now to help them!</p>
                            <div class="container">
                                <button><a href="/donate">Ways to donate</a></button>
                            </div>

                        </div>
                        <div class="card3">
                            <h1>GET MEALS</h1>
                            <p>Sign Up today....<br />
                                It's eassy!</p>
                            <div class="container">
                                <button><a href="/register">Begin Service</a></button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default landing