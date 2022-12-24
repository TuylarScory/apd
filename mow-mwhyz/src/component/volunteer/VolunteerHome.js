import React, { Component } from 'react'
import foodDelivery from '../../img/sl-food-delivery.jpg';
import homeDeli from '../../img/homedeli.jpg'
import msHelen from '../../img/mshelen.jpg'
import forJenny from '../../img/forjenny_3.jpg'
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


          <div class="wishfromem">
            <div class="wishfromemtitle">
              <p class="wftitle">Wish From Member</p>
            </div>
            <div class="wishfromempic">
              <img src={msHelen} />
            </div>
            <div class="wishing1">
              <p class="wishname">Ms Helen</p>
              <p class="wishing">I'm really glad that you guys are really kind and help me alot. As a senior adult like me need more campaign like this</p>
            </div>
            <div class="wishfromempic">
              <img src={forJenny} />
            </div>
            <div class="wishing1">
              <p class="wishname">Mr and Ms Jones</p>
              <p class="wishing">We are so happy with this service. Old age people like us need more care and also we can't cook for ourselves. Also our sons and daughter are at the aborad and far away from our home so, they can't always take care of us. Meals on Wheels really helpful and we wish you all have better future</p>
            </div>
            <div class="wishfromempic">
              <img src={msHelen} />
            </div>
            <div class="wishing1">
              <p class="wishname">Ms Helen</p>
              <p class="wishing">I'm really glad that you guys are really kind and help me alot. As a senior adult like me need more campaign like this</p>
            </div>
            <div class="wishfromempic">
              <img src={forJenny} />
            </div>
            <div class="wishing1">
              <p class="wishname">Mr and Ms Jones</p>
              <p class="wishing">I'm really glad that you guys are really kind and help me alot. As a senior adult like me need more campaign like this</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default VolunteerHome