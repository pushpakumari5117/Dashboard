import React from 'react'
import * as FiIcon from 'react-icons/fi'
function SignUp({ IconButton }) {
    return (
        <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i><FiIcon.FiUser /></i>
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i><FiIcon.FiMail /></i>
                <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
                <i><FiIcon.FiLock /></i>
                <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
                <i><FiIcon.FiLock /></i>
                <input type="password" placeholder="Confirm password" />
            </div>
            <input type="submit" className="bttn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
                <a href="https://facebook.com" className="social-icon">
                    <IconButton><FiIcon.FiFacebook /></IconButton>
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

export default SignUp
