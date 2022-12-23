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
import Alert from 'react-s-alert';
import LoadingIndicator from './LoadingIndicator'
import AddAdmin from '../component/admin/AddAdmin';
import Privacy from '../component/t&c/Privacy';
import Thank from '../component/thanku/Thank';
import SingleMember from '../component/admin/SingleView/SingleMember'
import SinglePartner from '../component/admin/SingleView/SinglePartner'
import SingleVolunteer from '../component/admin/SingleView/SingleVolunteer'
import PartnerHome from '../component/partner/PartnerHome';
import MemberHome from '../component/member/MemberHome'
import VolunteerHome from '../component/volunteer/VolunteerHome'
import AddDish from '../component/dish/AddDish';
import MemberProfile from '../component/profile/MemberProfile';
import PartnerProfile from '../component/profile/PartnerProfile';
import VolunteerProfile from '../component/profile/VolunteerProfile';
import AdminProfile from '../component/profile/AdminProfile';
import AllDish from '../component/admin/AllList/AllDish';
import DishStatus from '../component/admin/DishStatus';
import AllMember from '../component/admin/AllList/AllMember';
import AllPartner from '../component/admin/AllList/AllPartner';
import AllVolunteer from '../component/admin/AllList/AllVolunteer';
import SingleDish from '../component/admin/SingleView/SingleDish';
import PartnerDish from '../component/partner/PartnerDish';
import ApproveDish from '../component/partner/ApproveDish';
import MealList from '../component/member/MealList';
import ViewDish from '../component/member/ViewDish';
import OrderList from '../component/Order/OrderList';
import OrderDetail from '../component/Order/OrderDetail';
import MOList from '../component/admin/MOList'
import AllMOD from '../component/admin/AllList/AllMOD';
import MOD from '../component/admin/MOD';

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

          {/* Home page  */}
          <PrivateRoute path="/admin" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AdminHome}></PrivateRoute>

          <PrivateRoute path="/partner" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={PartnerHome}></PrivateRoute>

          <PrivateRoute path="/member" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MemberHome}></PrivateRoute>

          <PrivateRoute path="/volunteer" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={VolunteerHome}></PrivateRoute>



          {/* Add Form  */}
          <PrivateRoute path="/add_admin" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AddAdmin}></PrivateRoute>

          <PrivateRoute path="/add_dish" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AddDish}></PrivateRoute>



          {/* Profile  */}
          <PrivateRoute path="/member_profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MemberProfile}></PrivateRoute>

          <PrivateRoute path="/partner_profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={PartnerProfile}></PrivateRoute>

          <PrivateRoute path="/volunteer_profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={VolunteerProfile}></PrivateRoute>

          <PrivateRoute path="/admin_profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AdminProfile}></PrivateRoute>


          {/* View Meal Status  */}
          <PrivateRoute path="/getMealStatus/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={DishStatus}></PrivateRoute>



          {/* View All   */}
          <PrivateRoute path="/getAllMeals/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AllDish}></PrivateRoute>

          <PrivateRoute path="/getAllMembers" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AllMember}></PrivateRoute>

          <PrivateRoute path="/getAllPartners" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AllPartner}></PrivateRoute>

          <PrivateRoute path="/getAllVolunteers" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AllVolunteer}></PrivateRoute>


          <PrivateRoute path="/getAllMealOrder" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={AllMOD}></PrivateRoute>

          <PrivateRoute path="/getMOD" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MOD}></PrivateRoute>

          {/* Single Page  */}
          <PrivateRoute path="/getMember/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SingleMember}></PrivateRoute>

          <PrivateRoute path="/getPartner/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SinglePartner}></PrivateRoute>

          <PrivateRoute path="/getVolunteer/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SingleVolunteer}></PrivateRoute>

          <PrivateRoute path="/getDish/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={SingleDish}></PrivateRoute>


          <PrivateRoute path="/getApproveDish" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={PartnerDish}></PrivateRoute>

          <PrivateRoute path="/getADish/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={ApproveDish}></PrivateRoute>

          {/* Approved Meal List for Member  */}
          <PrivateRoute path="/meallist/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MealList}></PrivateRoute>


          {/* Order List for user  */}
          <PrivateRoute path="/orderList" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={OrderList}></PrivateRoute>


          {/* Order Detail for user */}
          <PrivateRoute path="/orderDetail/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={OrderDetail}></PrivateRoute>

          {/* View Dish and Order for member  */}
          <PrivateRoute path="/viewDish/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={ViewDish}></PrivateRoute>


          <PrivateRoute path="/viewOrderList/:type/:id" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
            component={MOList}></PrivateRoute>

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
