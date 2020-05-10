import React from 'react';

function Home() {
    return (
        <div className="home">
            <div className="card home-card">
                <h6 style={{padding:"5px"}}>Prashant Paddune</h6>
                <div className="card-image">
                <img src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>Amazing post</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home;
