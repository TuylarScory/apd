import React, { Component } from 'react'
import AppHeader from '../app/AppHeader'
import './AppHeader.css'
import { Route, Switch } from 'react-router-dom';
import { getCurrentUser } from '../service/Service';
import AppFooter from '../app/AppFooter';
import PrivateRoute from './PrivateRoute';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Login from '../component/login/Login'
import Landing from '../home/landing'
import Register from '../component/signup/Register';
import About from '../component/aboutus/About';
import Contact from '../component/contact/Contact';
import AdminHome from '../component/admin/AdminHome';
import Profile from '../component/profile/Profile';
import Alert from 'react-s-alert';
import LoadingIndicator from './LoadingIndicator'
import AddAdmin from '../component/admin/AddAdmin';
import Privacy from '../component/t&c/Privacy';
import Thank from '../component/thanku/Thank';
import SingleMember from '../component/admin/SingleMember'
import SinglePartner from '../component/admin/SinglePartner'
import SingleVolunteer from '../component/admin/SingleVolunteer'
import PartnerHome from '../component/partner/PartnerHome';
import MemberHome from '../component/member/MemberHome'
import VolunteerHome from '../component/volunteer/VolunteerHome'
import AddDish from '../component/dish/AddDish';


export const ACCESS_TOKEN = 'accessToken';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });
    // console.log("error");
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
        console.log("C user and authenticated => ");
        console.log(this.state.currentUser, this.state.authenticated);
      }).catch(error => {

        this.setState({
          loading: false
        });
      });


  }


  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
    console.log("Successfully logout");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
    console.log(this.state.currentUser);
  }

  render() {

    if (this.state.loading) {

      return <LoadingIndicator />

    }

    return (

      <>
        <AppHeader authenticated={this.state.authenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />




        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/login"
            render={(props) => <Login authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...props} />}></Route>

          <Route path="/register" render={(props) => <Register authenticated={this.state.authenticated} {...props} />}></Route>

          <PrivateRoute path="/admin" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AdminHome}></PrivateRoute>

          <PrivateRoute path="/partner" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={PartnerHome}></PrivateRoute>

          <PrivateRoute path="/member" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MemberHome}></PrivateRoute>

          <PrivateRoute path="/volunteer" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={VolunteerHome}></PrivateRoute>



          <PrivateRoute path="/add_admin" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AddAdmin}></PrivateRoute>

<PrivateRoute path="/add_dish" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AddDish}></PrivateRoute>



          <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={Profile}></PrivateRoute>

          <PrivateRoute path="/get/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SingleMember}></PrivateRoute>

          <PrivateRoute path="/getPartner/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SinglePartner}></PrivateRoute>

          <PrivateRoute path="/getVolunteer/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SingleVolunteer}></PrivateRoute>

          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/privacy" component={Privacy}></Route>

          <Route path="/thanku" render={(props) => <Thank authenticated={this.state.authenticated} {...props} />}></Route>


        </Switch>


        <AppFooter authenticated={this.state.authenticated} />
      </>
    )
  }
}

export default App
