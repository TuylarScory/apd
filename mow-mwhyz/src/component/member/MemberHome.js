import React, { Component } from 'react'
import './MemberHome.css'

export class MemberHome extends Component {



componentDidMount() {
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
  render() {

    

    return (

      <>
        <div>MemberHome</div>
        <div class="face rainbow">

          <h4 className='h4'>In a <b id="week"></b>,</h4>
          <h2 className='h2'>We offer <b id="meal"></b> meal</h2>


        </div>
      </>
    )
  }
}

export default MemberHome