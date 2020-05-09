import React from 'react';
import {Link} from "react-router-dom";

function Signup() {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h1 className="hotelfont">Instagram</h1>
                <input
                    type="text"
                    placeholder="name"
                />
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="password"
                    placeholder="password"
                />
                {/*<div className="file-field input-field">*/}
                {/*    <div className="btn #64b5f6 blue darken-1">*/}
                {/*        <span>Upload pic</span>*/}
                {/*        <input type="file" />*/}
                {/*    </div>*/}
                {/*    <div className="file-path-wrapper">*/}
                {/*        <input className="file-path validate" type="text" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Register
                </button>
                <h6>
                    <Link to="/signin">Already have an account ?</Link>
                </h6>
            </div>
        </div>
    );
}

export default Signup;
