import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logo from './BlobStudy.png';


function RouteFunc () {
  return (
    <Router>
        <Switch>

        <Route path="/main">
          <Main />
        </Route> 

        <Route path="/register">
          <Register />
        </Route> 

        <Route path="/">
          <LandingPage />
        </Route> 

        </Switch>

    </Router>
  );
}



function LandingPage() {
  return (
    <main>
      <div className="box">
        

        <div className="imgCont">
            <img src={logo} alt="Logo" />
        </div>

        <div className="loginBtn">

          <Link to="/main">
            LOGIN
          </Link>

        </div>

        <div className="registerBtn">

          <Link to="/register">
            REGISTER
          </Link>

        </div>

        
      </div>
    </main>
  );
}


function Main() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            HOME
          </Link>

        </div>

      </div>

        
    
    </main>
  );
}

function Register() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            RegHOME
          </Link>

        </div>

      </div>

        
    
    </main>
  );
}


export default RouteFunc;