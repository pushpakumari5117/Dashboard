import React from 'react'

function InBtn({ handelClick, register }) {
    return (
        <div className="panel right-panel">
            <div className="content">
                <h3>One of us ?</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                </p>
                <button className="bttn transparent" id="sign-in-btn" onClick={() => handelClick()}>Log in</button>
            </div>
            <img src={register} className="image" alt="" />
        </div>
    )
}

export default InBtn
