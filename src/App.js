import React, { useState } from 'react'
import './App.css';

/* Theme Imports */
import { ThemeProvider } from 'styled-components';
import {  darkTheme } from './utils/globalstyles/theme.js';
import { GlobalStyles } from './utils/globalstyles/global';

/* Pages */
import Our_Homes from './pages/Our_Homes/Our_Homes';
import Neighborhood from './pages/Neighborhood/Neighborhood';
import Testimonials from './pages/Testimonials/Testimonials';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Dashboard/Login';
import ForgotPassword from './pages/Dashboard/ForgotPassword';

import Residence from './pages/Residence/Residence';
import Landing from './pages/Landing/Landing';

/* React Router Imports */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
    localStorage.setItem("userAuthenticated", true);
  }
  
  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
    localStorage.setItem("userAuthenticated", false);
  }

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <div className="App"></div>

        <Switch>
            <Route exact path="/homes" component={Our_Homes}></Route>
            <Route exact path="/neighborhood" component={Neighborhood}></Route>
            <Route exact path="/testimonials" component={Testimonials}></Route>

            <PrivateRoute exact path='/resident/dashboard' user={user} component={Dashboard} />
            
            {/* Pass handleLogin to Login page as prop */}
            <Route exact path='/resident/login' handleLogin={handleLogin} render={
              props => <Login {...props} user={user.toString()} handleLogin={handleLogin} />} 
              />

            <Route exact path="/residence" component={Residence}></Route>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/" component={Landing}></Route>
        </Switch>
        
      </ThemeProvider>
    </Router>
  );
}

export default App;
