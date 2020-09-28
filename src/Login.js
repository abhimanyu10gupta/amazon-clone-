import React, {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";

function Login () {

    const[email, setEmail] = useState('email');
    const[password, setPassword] = useState('password');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login stuff.
    }

    const register =e => {
        e.preventDefault();

        //some fancy firebase register stuff.
    }

    return (
        <div className={'login'}>
            <Link to = '/'>
                <img className={'login__logo'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'}/>
            </Link>

            <div className={'login__container'}>
               <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type={'text'} value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type={'password'} value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type={'submit'} onClick={signIn} className={'login__signInButton'}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className={'login__registerButton'}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login