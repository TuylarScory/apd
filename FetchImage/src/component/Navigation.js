import React, { Component } from 'react'
import './Navigation.css'
export class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navi-left">
    <ul className="menu">
        <li className="firstmenu">
            <a href="">Shops</a>
        </li>
        <li className="secondmenu">
            <a href="">Contact Us</a>
        </li>
        <li className="thirdmenu">
            <a href="">About Us</a>
        </li>
        <div className="navi-right">
       
            <li className="fouthmenu">
                <a href="">Donate</a>
            </li>
            <li className="fifthmenu">
                <a href="/register">Register</a>
            </li>
            <li className="sixthmenu">
                <a href="/login">Login</a>
            </li>
    </div>

    </ul>
</div>
      </div>
    )
  }
}

export default Navigation