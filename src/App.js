import React from 'react'
import './App.css';

/* Theme Imports */
import { ThemeProvider } from 'styled-components';
import {  darkTheme } from './utils/globalstyles/theme.js';
import { GlobalStyles } from './utils/globalstyles/global';

/* Pages */
// import Our_Homes from './pages/Our_Homes/Our_Homes';
import Collections from './pages/Our_Homes/Collections';
import Neighborhood from './pages/Neighborhood/Neighborhood';
import Sustainability from './pages/Sustainability/Sustainability';

/* Residents */
import Dashboard from './pages/Resident/Dashboard';
import Login from './pages/Resident/Login';
import ForgotPassword from './pages/Resident/ForgotPassword';
import Residence from './pages/Our_Homes/Residence';
import Landing from './pages/Landing/Landing';

import Manager from './pages/Manager/Manager';
import ManagerLogin from './pages/Manager/Login';

/* Navbar */
import Navbar from './nav';
import Footer from './components/Footer/Footer';

/* React Router Imports */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRouteManager from './components/PrivateRouteManager';
import PrivateRouteResident from './components/PrivateRouteResident';

/* Redux */
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/API/authToken";
import { setCurrentUser, logoutUser } from "./actions/auth";


if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token, localStorage._id);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {

  return (
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={darkTheme}>
              <GlobalStyles />

              <div className="App"></div>

              <Navbar />
              
              <Switch>
                  <Route exact path="/collections" component={Collections}></Route>
                  <Route exact path="/neighborhood" component={Neighborhood}></Route>
                  <Route exact path="/sustainability" component={Sustainability}></Route>

                  <Route exact path='/resident/login' component={Login}/>
                  
                  <PrivateRouteResident exact path='/resident/dashboard' component={Dashboard} />
                  
                  <PrivateRouteManager exact path='/manager' component={Manager} />

                  <Route exact path='/manager/login' component={ManagerLogin} />
                  

                  <Route path="/residence" component={Residence}></Route>
                  <Route exact path="/forgotpassword" component={ForgotPassword}/>
                  <Route path="/" component={Landing}></Route>
              </Switch>

              <Footer />
            </ThemeProvider>
        </Router>
    </Provider>
  );
}

export default App;
