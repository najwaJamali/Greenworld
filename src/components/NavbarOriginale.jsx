import { Component, React } from "react";
import "./NavbarStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

class Navbar extends Component {
    // Set state
    // Make Handleclick Function

    render() {
        return (
            <div className="navBar">
                <nav class="navbar navbar-expand-lg navbar-muted "  >
                    <div class="container-fluid nav-end justufy-content-between" >

                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="/Reddrop logo.svg"
                                height="30"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>

                        <div class="collapse navbar-collapse justify-content-end  " id="navbarNavAltMarkup" className="NavElements">
                            <div class="navbar-nav justify-content-space-between d-flex align-items-centre  "  >
                                <Link class="nav-link  me-3 "  aria-current="page" to={'/'} >Home</Link>
                                <Link class="nav-link me-3" to={'/FindADonar'}  >find a Donar</Link>
                                <Link class="nav-link me-3 " to={'/DonatBload'} >donate blood</Link>
                                <div className="d-flex align-items-center">
                                    <Link class="btn btn-outline-light  me-3 p-1 ps-2 pe-2 " to={'/Sign_In'}  >Sign in</Link>
                                    <Link class="btn btn-outline-light  me-3  p-1 ps-2 pe-2" to={'/Sign_Up'}  >Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
