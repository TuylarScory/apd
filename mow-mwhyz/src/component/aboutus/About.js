import React, { Component } from 'react'
import donation from '../../img/donation.jpg';
import bc from '../../img/bc.jpg';
import mko from '../../img/myo.jpg'
import ts from '../../img/Tuylar.jpg'
import sel from '../../img/Selene.jpg'
import './About.css';
import cosmos from '../../img/Cosmos.jpg'

export class About extends Component {
    render() {
        return (
            <div class="body">
                <div class="first_div">
                    <h1>About Us</h1>
                    <p>
                        This project is intended for charity. People who want to donate can do donation easily.
                        Persons who are unable to cook for themselves or maintain their nutritional status
                        because of old age, illness, or disability can get a hot noon meal. The service will
                        be accessible from Monday through Friday. Frozen meals will be provided to members
                        who are more than ten kilometers away from their outsourced kitchens and support
                        over the weekend.
                    </p>
                </div>
                <div class="second_div">
                    <div class="left_img">
                        <img src={donation} alt="donation_image" />
                    </div>
                    <div class="right_text">
                        <p>
                            This protal is the platform for charity where donors can donate easily and
                            members can order the food easily. Delivery service will be come up with care
                            giver service.
                        </p>
                        <p>
                            "The team at Meals on Wheels has consistently shown incredible commitment and
                            support during my time volunteering there. Sessions for volunteer engagement
                            and orientation have gone smoothly. Being a member of a group that contributes
                            so much to the community gives me a lot of personal happiness, and after seeing
                            how well the organization protects its volunteers as well as its beneficiaries,
                            I've decided to volunteer for much longer than I ever anticipated."
                        </p>
                        - <q>Thu Ta Aung, Volunteer</q>
                    </div>
                </div>
                <div class="third_div">
                    <h1>Our Team</h1>
                    <div class="team">
                        <div class="row">
                            <div class="col">
                                <img src={mko} alt="Myo Kyaw Oo" class="img_1"/>
                            </div>
                            <div class="col">
                                <img src={bc} alt="Win Myat Aung"  class="img_2"/>
                            </div>
                            <div class="col">
                                <img src={cosmos} alt="Htet Htet Hlaing" class="img_3" />
                            </div>
                        </div>
                        <div class="row_1">
                            <div class="col_1">
                                <img src={sel} alt="Zin Min Nadi" class="img_4" />
                            </div>
                            <div class="col_1">
                                <img src={ts} alt="Yoon Yee Mon San" class="img_5" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About