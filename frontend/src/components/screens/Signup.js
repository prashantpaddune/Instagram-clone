import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import M from "materialize-css"

const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.err) {
                    M.toast({html: data.err,classes:"#c62828 red darken-3"})
                }
                else {
                    M.toast({html:data.message,classes:"#43a047 green darken-1"})
                    history.push('/signin')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h1 className="hotelfont">Instagram</h1>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(event => setName(event.target.value))}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(event => setEmail(event.target.value))}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event => setPassword(event.target.value))}
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
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={() => PostData()}
                >
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
