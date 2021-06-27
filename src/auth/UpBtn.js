import React from 'react'

function UpBtn({ handelClick, log }) {
    return (
        <div className="panel left-panel">
            <div className="content">
                <h3>New here ?</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                </p>
                <button className="bttn transparent" id="sign-up-btn" onClick={() => handelClick()}>Sign up</button>
            </div>
            <img src={log} className="image" alt="" />
        </div>
    )
}

export default UpBtn
