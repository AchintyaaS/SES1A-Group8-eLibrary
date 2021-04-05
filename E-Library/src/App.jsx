/* Use Pascal Case, capital first letter for each word, e.g VariableOne */
/* Imports and general items */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logo from './images/BlobStudy.png';

/* Manages travelling between pages */
function RouteFunc () {ui
  return (
    <Router>
        <Switch>

        <Route path="/Main"> {/* Landing page with login */}
          <Main />
        </Route> 

        <Route path="/Register"> {/* Registration page, connected to Main */}
          <Register />
        </Route> 

        <Route path="/AccountDetails"> {/* Initial page after login, shows user details */}
          <Admin />
        </Route> 

        <Route path="/Catalogue"> {/* Library Catalogue for browsing and searching */}
          <Manager />
        </Route> 

        <Route path="/History"> {/* Personal borrowing history */}
          <Staff />
        </Route> 

        <Route path="/GeneralHistory"> {/* General book history (admin and managers) */}
          <LandingPage />
        </Route> 

        <Route path="/LibraryManagement"> {/* For managing library catalogue (admin) */}
          <LandingPage />
        </Route> 

        <Route path="/BookManagement"> {/* For managing book details (admin) */}
          <LandingPage />
        </Route> 

        <Route path="/UserManagement"> {/* For managing borrow/renewal limits and fines (admin) */}
          <LandingPage />
        </Route> 

        <Route path="/BookRequest"> {/* Form to request new books (staff)*/}
          <LandingPage />
        </Route> 

        </Switch>

    </Router>
  );
}

/* Main Page contents*/
function Main() {
  return (
    <main>
      <div className="leftBox">
        
       <div className="imgCont">
        <img src={logo} alt="Logo" />
       </div>

      </div>

      <div className="rightBox">
          
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


function AccountDetails() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            adminHOME
          </Link>

        </div>

      </div>

    </main>
  );
}


function Catalogue() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            managerHOME
          </Link>

        </div>

      </div>

    </main>
  );
}



function History() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}

function GeneralHistory() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}

function LibraryManagement() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}

function BookManagement() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}

function UserManagement() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}

function BookRequest() {
  return (
    <main>
      <div className="box">

       <div className="homeBtn">

          <Link to="/">
            staffnHOME
          </Link>

        </div>

      </div>

    </main>
  );
}


export default RouteFunc;