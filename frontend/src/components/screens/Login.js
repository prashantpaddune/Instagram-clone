import React from 'react';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h1 className="hotelfont">Instagram</h1>
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="password"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Login
                </button>
                <h6>
                    <Link to="/signup">Don't have an account ?</Link>
                </h6>
                <h6>
                    <Link to="/reset">Forgot password ?</Link>
                </h6>

            </div>
        </div>
    );
}

export default Login;
