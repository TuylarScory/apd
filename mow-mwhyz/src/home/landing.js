import React, { Component } from 'react'
import './landing.css';
import img from '../img/photo.jpg';


export class landing extends Component {
  render() {
    return (
        <div class="body">

        <div class="text">
            <h2>Only get <i>Frozen Food</i></h2>
            <h3>ON</h3>
            <h2><b>Weekend</b></h2>
        </div>
        <div class="banner"></div>
        <div class="end">
            <p>Popular Meals</p> 
            <div class="list">
                <div class="row-1">
                    <div class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                    <div  class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                    <div  class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                </div>
                <div class="row-1">
                    <div class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                    <div  class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                    <div  class="col">
                        <img src={img} alt=""/>
                        <h3>Burger</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

export default landing