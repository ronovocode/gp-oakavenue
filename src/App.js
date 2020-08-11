import React from 'react'
import './App.css';

/* Theme Imports */
import { ThemeProvider } from 'styled-components';
import {  darkTheme } from './utils/globalstyles/theme.js';
import { GlobalStyles } from './utils/globalstyles/global';

/* Pages */
import Our_Homes from './pages/Our_Homes/Our_Homes';
import Neighborhood from './pages/Neighborhood/Neighborhood';
import Testimonials from './pages/Testimonials/Testimonials';

/* Residents */
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Dashboard/Login';
import ForgotPassword from './pages/Dashboard/ForgotPassword';
import Residence from './pages/Residence/Residence';
import Landing from './pages/Landing/Landing';

import Admin from './pages/Admin/Admin';

/* Navbar */
import Navbar from './nav';

import Footer from './components/Footer/Footer';

/* React Router Imports */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

/* Redux */
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/API/authToken";
import { setCurrentUser, logoutUser } from "./actions/auth";


if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
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
                <Route exact path="/homes" component={Our_Homes}></Route>
                <Route exact path="/neighborhood" component={Neighborhood}></Route>
                <Route exact path="/testimonials" component={Testimonials}></Route>

                <Route exact path='/resident/login' component={Login}/>
                
                <PrivateRoute exact path='/resident/dashboard' component={Dashboard} />
                
                <PrivateRoute exact path='/admin' component={Admin} />
                

                <Route exact path="/residence" component={Residence}></Route>
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
