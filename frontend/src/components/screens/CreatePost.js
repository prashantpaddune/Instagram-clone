import React from 'react';

function CreatePost() {
    return (
        <div className="card input-filed" style={{margin:"30px auto", maxWidth:"500px", padding:"20px", textAlign:"center"}}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Uplaod Image</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                Submit post
            </button>
        </div>
    )
}

export default CreatePost;
