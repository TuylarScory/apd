import React, { Component } from 'react'
import foodDelivery from '../../img/sl-food-delivery.jpg';
import homeDeli from '../../img/homedeli.jpg'
import msHelen from '../../img/mshelen.jpg'
import froJenny from '../../img/forjenny_3.jpg'
import mrBelly from '../../img/mrbilly.jpg'
import volcare from '../../img/volcare.jpeg'
import './VolunteerHome.css'

export class VolunteerHome extends Component {
  render() {
    return (
      <>

        <div class="vtmainpage">
          <div class="vtmainpagehero">
            <div class="vtmainpageherotext">
              <div class="vtmainpageherotext1">
                <p>Make Good</p>
              </div>
              <div class="vtmainpageherotext2">
                <p>For <span class="vtmainpagespan">Future</span></p>
              </div>
            </div>
            <div class="vtmainpageheropic">
              <img class="vtmainpagemidpic-img" src={foodDelivery} />
            </div>
          </div>
          <div class="vtmainpagemid">

            <div class="vtmainpagemidtext">
              <p class="vtmainpagemidtext-p">Thanks For All You Do!</p>
            </div>
            <div class="vtmainpagemidpic">
              <img class="vtmainpagemidpic-img" src={homeDeli} />
            </div>
          </div>


          <div class="volunteer-home-main">
            <h2 class="partner-home-main-title">Wish From Member</h2>
            <div class="phome-main-row">
              <div class="phome-main-left">
                <div class="phome-main-img-div">
                  <img src={msHelen} class="phome-main-img" alt="" />
                </div>
                <div class="phome-main-info-div">
                  <h3>Ms Helen</h3>
                  <p>I'm really glad that you guys are really kind and help me alot. As a senior adult like me need
                    more campaign like this</p>
                </div>
              </div>
              <div class="phome-main-right">
                <div class="phome-main-img-div">
                  <img src={froJenny} class="phome-main-img" alt="" />
                </div>
                <div class="phome-main-info-div">
                  <h3>Mr and Ms Jones</h3>
                  <p>We are so happy with this service. Old age people like us need more care and also we can't cook
                    for ourselves. Meals on Wheels really helpful and we wish you all have better
                    future</p>
                </div>
              </div>
            </div>
            <div class="phome-main-row1">
              <div class="phome-main-left">
                <div class="phome-main-img-div">
                  <img src={mrBelly} class="phome-main-img" alt="" />
                </div>
                <div class="phome-main-info-div">
                  <h3>Mr Belly</h3>
                  <p>I'm really happy with this service. This is really helpful and need for the senior like us</p>
                </div>
              </div>
              <div class="phome-main-right">
                <div class="phome-main-img-div">
                  <img src={volcare} class="phome-main-img" alt="" />
                </div>
                <div class="phome-main-info-div">
                  <h3>Ms Tiffany</h3>
                  <p>I'm really glad that you guys are really kind and help me alot. As a senior adult like me need
                    more campaign like this</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default VolunteerHome