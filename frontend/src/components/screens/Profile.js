import React from 'react';

function Profile() {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{margin:"20px 0px", borderBottom:"1px solid grey"}}>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div>
                        <img style={{width:"120px",height:"120px",borderRadius:"80px"}}
                             src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    <div>
                        <h4>Prashant Paddune</h4>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <h6>10 posts</h6>
                            <h6>10 followers</h6>
                            <h6>10 following</h6>
                        </div>

                    </div>
                </div>

                {/*<div className="file-field input-field" style={{margin:"10px"}}>*/}
                {/*    <div className="btn #64b5f6 blue darken-1">*/}
                {/*        <span>Update pic</span>*/}
                {/*        <input type="file" />*/}
                {/*    </div>*/}
                {/*    <div className="file-path-wrapper">*/}
                {/*        <input className="file-path validate" type="text" />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
    )
}

export default Profile;
