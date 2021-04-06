import React from 'react';
import './App.css';

import logo from './images/study.png';

function Landing() {
  return (
    <main>
      <div className="box">

       <div className="logo-container">
        <img src={logo} alt="Logo" />
       </div>
       <div class="outerDivider">
        <div class="innerDivider">
        </div>
       </div>
       <div className="login-btn">
        LOGIN
       </div>
       </div>
      
    </main>
  );
}

export default Landing;