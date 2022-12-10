import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './component/Footer'
import MemberLogin from './component/MemberLogin'
import Navigation from './component/Navigation'
import VolunteerRegister from './component/VolunteerRegister'
import PartnerProfile from './component/profile/PartnerProfile'
import MemberProfile from './component/profile/MemberProfile'
import { getCurrentUser } from './service/FoodService';
import PrivateRoute from './app/PrivateRoute';
import MemberRegister from './component/MemberRegister'
import AdminHomePage from './component/admin/AdminHomePage'
import SingleMember from './component/admin/SingleMember'
import SinglePartner from './component/admin/SinglePartner'
import SingleVolunteer from './component/admin/SingleVolunteer'
import ViewDishes from './component/admin/ViewDishes'
import SinglePendingDish from './component/admin/SinglePendingDish'
import SingleApprovedDish from './component/admin/SigleApprovedDish'
import memberHomePage from './component/member/memberHomePage'
export const ACCESS_TOKEN = 'accessToken';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }
  render() {
    return (
      <div>
          <Router>
              <Navigation authenticated={this.state.authenticated}></Navigation>
              <Switch>
              {/* <Route path="/admin" render={(props) => <AdminHomePage authenticated={this.state.authenticated} {...props} />}></Route> */}
              <Route path="/login"
              render={(props) => <MemberLogin authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...props} />}></Route>
                <Route path="/register" render={(props) => <MemberRegister authenticated={this.state.authenticated} {...props} />}></Route>
                <PrivateRoute path="/admin" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={AdminHomePage}></PrivateRoute>
              <PrivateRoute path="/get/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={SingleMember}></PrivateRoute>
               <PrivateRoute path="/getPartner/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={SinglePartner}></PrivateRoute>

               <PrivateRoute path="/getAllDishes/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={ViewDishes}></PrivateRoute>
              <PrivateRoute path="/getPendingDish/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={SinglePendingDish}></PrivateRoute>
               <PrivateRoute path="/getApprovedDish/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={SingleApprovedDish}></PrivateRoute>
                <PrivateRoute path="/memberHome" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={memberHomePage}></PrivateRoute>

              <PrivateRoute path="/getVolunteer/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={SingleVolunteer}></PrivateRoute>
              <PrivateRoute path="/partnerprofile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={PartnerProfile}></PrivateRoute>
              <PrivateRoute path="/memberprofile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} 
              component={MemberProfile}></PrivateRoute>
              </Switch>
              <Footer></Footer>
            </Router> 
      </div>
    )
  }
}

export default App