import React from "react";
import './login.css';

const login = () => {
    return (
        <div className="container">   
             <div className='cover'>
        <h1>LOGIN</h1>
        <input className="input" type='text' placeholder= 'username' />
        <input className="input" type='password' placeholder='password' />

        <div className='login-btn'>LOGIN</div>

        <p classname='text'>OR LOGIN USING</p>

        <div className= 'alt-login'>
            <div className ='facebook'>
                <div className ='google'></div>
            </div>
        </div>

        </div>
        </div>
    )
}

export default login;