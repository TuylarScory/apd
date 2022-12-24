import React, { Component, useState } from 'react'
import './AppHeader.css';
import loco from '../img/logo.png';
import { Link, NavLink } from 'react-router-dom';

export class AppHeader extends Component {

    constructor(props) {
        super(props);
        console.log(props);

    }

    render() {



        return (
            <>

                <div className="header" id='header'>
                    {/* <a href="/"><h1>Meals On Wheels</h1></a> */}
                    <Link to="/"><h1>Meals On Wheels</h1></Link>
                    <img src={loco} alt="" className="logo" />
                </div>


                {/* <nav ref={stickyRef} className={classNames('nav', { sticky })}>
                <div className="nav-left">
                    <ul>
                        <li><a href="/shop" className={classNames('a', { link })} >Shops</a></li>
                        <li><a href="/contact" className={classNames('a', { link })}>Contact Us</a></li>
                        <li><a href="/about" className={classNames('a', { link })}>About Us</a></li>
                    </ul>
                </div>
                <div className="nav-middle" >
                    <img src={loco}  alt="" id='nav-middle-img' />
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href="/register" className={classNames('a', { link })}>Register</a></li>
                        <li><a href="/login" className={classNames('a', { link })}>Login</a></li>
                        <li><a href="/donate" id="donate" className={classNames('a', { link })}>Donate</a></li>
                    </ul>
                </div>
            </nav> */}

                {
                    (() => {
                        if (this.props.authenticated) {
                            if (this.props.currentUser.userRole == "ADMIN") {
                                return (
                                    <nav >
                                        <div className="nav-left">
                                            <ul>
                                                <li>
                                                    <NavLink to="/add_admin" >Add_Admin</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/getMOD" >Order_List</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin" >Home</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="nav-middle" >

                                        </div>
                                        <div className="nav-right">
                                            <ul>
                                                <li>
                                                    <NavLink to="/admin_profile">Profile</NavLink>
                                                </li>
                                                <li>
                                                    <a onClick={this.props.onLogout} id="logout">Logout</a>
                                                </li>
                                                <li>
                                                    <NavLink to="/donate" id='donate' >Donate</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                )
                            }
                            else if (this.props.currentUser.userRole === "PARTNER") {
                                return (
                                    <nav >
                                        <div className="nav-left">
                                            <ul>
                                                <li>
                                                    <NavLink to="/add_dish" >Add_Meal</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/getApproveDish" >Meals</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/orderList" >Order_List</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/partner" >Home</NavLink>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="nav-middle" >

                                        </div>
                                        <div className="nav-right">
                                            <ul>
                                                <li>
                                                    <NavLink to="/partner_profile" >Profile</NavLink>
                                                </li>
                                                <li>
                                                    <a onClick={this.props.onLogout} id="logout">Logout</a>
                                                </li>
                                                <li>
                                                    <NavLink to="/donate" id='donate' >Donate</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                )
                            }
                            else if (this.props.currentUser.userRole === "MEMBER") {
                                return (
                                    <nav >
                                        <div className="nav-left">
                                            <ul>
                                                <li>
                                                    <NavLink to="/orderList" title="Order_History">History</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/member" >Home</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="nav-middle" >

                                        </div>
                                        <div className="nav-right">
                                            <ul>
                                                <li>
                                                    <NavLink to="/member_profile" >Profile</NavLink>
                                                </li>
                                                <li>
                                                    <a onClick={this.props.onLogout} id="logout">Logout</a>
                                                </li>
                                                <li>
                                                    <NavLink to="/donate" id='donate' >Donate</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                )
                            }
                            else if (this.props.currentUser.userRole === "VOLUNTEER") {
                                return (
                                    <nav >
                                        <div className="nav-left">
                                            <ul>
                                                <li>
                                                    <NavLink to="/orderList" >Order_List</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/volunteer" >Home</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="nav-middle" >

                                        </div>
                                        <div className="nav-right">
                                            <ul>
                                                <li>
                                                    <NavLink to="/volunteer_profile" >Profile</NavLink>
                                                </li>
                                                <li>
                                                    <a onClick={this.props.onLogout} id="logout">Logout</a>
                                                </li>
                                                <li>
                                                    <NavLink to="/donate" id='donate' >Donate</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                )
                            }

                        } else {
                            return (
                                <nav >
                                    <div className="nav-left">
                                        <ul>
                                            {/* <li>
                                                <NavLink to="/shop" >Shops</NavLink>
                                            </li> */}
                                            <li>
                                                <NavLink to="/contact">Contact</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about">About us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nav-middle" >

                                    </div>
                                    <div className="nav-right">
                                        <ul>
                                            <li>
                                                <NavLink to="/register">Register</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/login" >Login</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/donate" id='donate'>Donate</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            )
                        }
                    }
                    )()
                }
                {/* {
                this.props.authenticated ? 
                (
                

                    
                    
                    <nav >
                        <div className="nav-left">
                            <ul>
                                <li>
                                    <NavLink to="/add_admin" >Add admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" >Request Meal List</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/am_home" >Admin Home</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-middle" >
                           
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <NavLink to="/admin" >List</NavLink>
                                </li>
                                <li>
                                    <a onClick={this.props.onLogout} id="logout">Logout</a>
                                </li>
                                <li>
                                    <NavLink to="/donate" id='donate' >Donate</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                ) : (
                    <nav >
                        <div className="nav-left">
                            <ul>
                                <li>
                                    <NavLink to="/shop" >Shops</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-middle" >
                            
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" >Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/donate" id='donate'>Donate</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )
            } */}




            </>
        )
    }
}

export default AppHeader