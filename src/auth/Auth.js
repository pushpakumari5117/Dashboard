import React, { useState } from 'react'
import './Singup.css'
import log from '../images/log.svg';
import register from '../images/register.svg'
import { IconButton } from '@material-ui/core';
import SignIn from './SignIn';
import SignUp from './SignUp'
import UpBtn from './UpBtn';
import InBtn from './InBtn';
const Auth = () => {
    const [clicked, setClicked] = useState({ clicked: false });
    const handelClick = () => {
        setClicked(!clicked);
    }
    return (
        <div>
            <div className={clicked ? " sign-up-mode main-container" : "sign-in-mode main-container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <SignIn IconButton={IconButton} />
                        <SignUp IconButton={IconButton} />
                    </div>
                </div>

                <div className="panels-container">
                    <UpBtn log={log} handelClick={handelClick} />
                    <InBtn register={register} handelClick={handelClick} />
                </div>
            </div>
        </div>
    )
}

export default Auth;
