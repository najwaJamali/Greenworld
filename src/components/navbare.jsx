import { useState } from "react";
import "./NavbarStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navigation">
      <div >
      <nav class="navbar navbar-expand-lg pt-0 ">
    
      <div class="d-flex position-relative  "  >
      <a class="navbar-brand  " href="#" className="logo"><img
                                src="/MicrosoftTeams-image (2).png"
                                height='50px'
                                alt="MDB Logo"
                                loading="lazy"
                                
                            /></a></div>
      <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
          <Link class="nav-link  me-3 "  aria-current="page" to={'/'} >Home</Link>
                                          </li>
          <li class="nav-item">
          <Link class="nav-link me-3" to={'/planting'}  >plantings</Link>

          </li>
          <li class="nav-item">
          <Link class="nav-link me-3 " to={'/Aboutus'} >about us </Link>

          </li>

          <li class="nav-item ">
          <Link class="nav-link me-3  me-3 " to={'/Contactus'}  >contact us</Link>
          </li>
            
          
        </ul>
      </div>
    
    </nav>
    </div>
    </nav>
  );
}

