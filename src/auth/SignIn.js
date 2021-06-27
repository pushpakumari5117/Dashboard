import React from 'react'
import * as FiIcon from 'react-icons/fi'

function SignIn({ IconButton }) {
    return (
        <form action="#" className="sign-in-form">
            <h2 className="title">Log in</h2>
            <div className="input-field">
                <i><FiIcon.FiUser /></i>
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i><FiIcon.FiLock /></i>
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="bttn solid " />
            <p className="social-text">Or Log in with social platforms</p>
            <div className="social-media">
                <a href="https://facebook.com" className="social-icon">
                    <IconButton><FiIcon.FiFacebook /> </IconButton>
                </a>
                <a href="https://twitter.com" className="social-icon">
                    <IconButton><FiIcon.FiTwitter /></IconButton>
                </a>
                <a href="https://github.com" className="social-icon">
                    <IconButton><FiIcon.FiGithub /></IconButton>
                </a>
                <a href="https://linkedin.com" className="social-icon">
                    <IconButton><FiIcon.FiLinkedin /></IconButton>
                </a>
            </div>
        </form>
    )
}

export default SignIn;
