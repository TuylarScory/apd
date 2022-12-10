import React, { Component } from 'react'
import './Navigation.css'

export class Footer extends Component {
  render() {
    return (
        <div className="footer-left">
             <ul className="footerlist">
                <li className="firstfooter">
                     <a href="">Contact Us</a>
                </li>
                <br/>
                <li className="secondfooter">
                    <a href="">About Us</a>
                </li>
                <br/>
                <li className="thirdfooter">
                    <a href="">Privacy Policy</a>
                </li>

                 <div className="footer-right">
       
                     <li className="fouthfooter">
                         <a href="">Follow Us</a>
                     </li>
                     <br/>
                     <div className="smi">
                         <img src="Social icon.jpg" alt="Social Media icon"></img>
                    </div>

                    </div>
                </ul>
        </div>
    )
  }
}

export default Footer