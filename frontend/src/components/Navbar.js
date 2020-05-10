import React from "react";
import {Link, withRouter} from "react-router-dom";

import "../App.css";

const Navbar = () => {
    return(
            <nav>
                <div className="nav-wrapper white">
                    <Link to="/" className="brand-logo left">Instagram</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/signin">Login</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/create">Create Post</Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default withRouter(Navbar);