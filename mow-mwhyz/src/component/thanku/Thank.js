import React, { Component } from 'react'
import './Thank.css'

import thanku from '../../img/thank.gif'

export class Thank extends Component {
  render() {
    return (
      <>
        <div className='thank_body'>
          <img src={thanku} className="thank_img" alt="" />
          <div className='thank_text'>
            <h4>Thanks for reaching out</h4>
            <h3 >Please Login in!</h3>
            <div className='thank_button'>
              <a href='/login' className='thank_btn'>Continue</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Thank