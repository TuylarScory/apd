import React, { Component } from 'react'
import { getApprovedPartner } from '../../service/Service'
import './MemberHome.css'

export class MemberHome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      allPartners: []
    }
  }

  componentDidMount() {

    getApprovedPartner()
      .then((response) => {
        console.log(response)
        this.setState({
          allPartners: response
        })

      })


    var d = new Date();


    function isWeekend(date = new Date()) {

      var output = '';

      if (date.getDay() === 6 || date.getDay() === 0) {
        output = "Weekend"


      } else {
        output = "Weekday"
      }
      return output;

    }

    function isMeal(date1 = new Date()) {


      var output1 = ''
      if (date1.getDay() === 6 || date1.getDay() === 0) {

        output1 = "Frozen"


      } else {
        output1 = "Hot"
      }
      return output1;

    }


    document.getElementById("week").innerHTML = isWeekend(d);
    document.getElementById("meal").innerHTML = isMeal(d);




  }



  getSingleApprovedDish = (id) => {
    this.props.history.push(`/mealList/${id}`)
  }


  render() {
    
    let topBtn = document.getElementById("top-btn");


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    }


    function toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return (

      <>
        <div class="face rainbow">

          <h4 className='h4'>In a <b id="week"></b>,</h4>
          <h2 className='h2'>We offer <b id="meal"></b> meal</h2>


        </div>

        <div class="member-home-body">
          <h2 class="member-home-body-title">Shop List</h2>
          <div class="member-shop-list"  >
            {
              this.state.allPartners.map(partner =>

                <div class="member-shop" >
                  <div className='member-shop-card'>
                    <img src={"http://localhost:8080/merry/image/" + partner.profileImage.id}
                      class="member-card-img" alt="" />

                    <div class="member-shop-card-body">
                      <h3 class="member-shop-card-title">{partner.partnerName}</h3>
                      <h4 class="member-shop-card-ph"><i aria-hidden="true" class="fa fa-phone" id="ph-icon"></i>
                        {partner.partnerPhoneNo}</h4>
                      <div class="member-shop-address">
                        <h4><i aria-hidden="true" class="fa fa-map" id="address-icon"></i></h4>
                        <h4> {partner.partnerLocationByAddress}</h4>
                      </div>
                    </div>
                    <div class="member-card-arrow">

                      <button class="member-card-btn" onClick={() => this.getSingleApprovedDish(partner.id)}>Menu</button>

                    </div>
                  </div>
                </div>



              )
            }
          </div>

        </div>

        <div>
          <button onClick={toTop} id="top-btn"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></button>
        </div>
      </>
    )
  }
}



export default MemberHome