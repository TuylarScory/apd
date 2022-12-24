import React, { Component } from 'react'
import grandMa1 from '../../img/grandma1.jpg'
import mowp1 from '../../img/mowp1.png'
import mowp2 from '../../img/mowp3.png'
import mowp3 from '../../img/web1_mow-prep.jpg'
import msHelen from '../../img/mshelen.jpg'
import froJenny from '../../img/forjenny_3.jpg'
import mrBelly from '../../img/mrbilly.jpg'
import volcare from '../../img/volcare.jpeg'
import './PartnerHome.css'


export class PartnerHome extends Component {
  render() {
    return (
      <>
        <div class="partner-home-body">
          <div class="partner-home-first">
            <h1 class="phome-first-text">Changing <span class="phome-first-text-span">Lives</span>,</h1>
            <h1 class="phome-first-text1">One <span class="phome-first-text-span">Meal</span> At A Time.</h1>
            <div class="phome-first-box">
              <h2>Thanks for supporting</h2>
            </div>
            <div class="phome-first-img-coll">
              <img src={mowp1} class="phome-first-img1" alt="" />
            </div>
            <div class="phome-first-img-coll1">
              <img src={mowp2} class="phome-first-img2" alt="" />
            </div>
            <div class="phome-first-img-coll2">
              <img src={mowp3} class="phome-first-img3" alt="" />
            </div>
          </div>
        </div>
        <div class="partner-home-main">
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
      </>
    )
  }
}

export default PartnerHome