import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
   return(
  
    <div class="navbar1">
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Dream Houses</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
     
        <Link className="nav-link" to="/About">Agents</Link>
        <Link className="nav-link" to="/Contact">Contact Us</Link>
        <Link className="nav-link" to="/Book">Book Online</Link>
       
      </div>
    </div>
  </div>
</nav> 
    </div>

   ); 
}
export default Nav;