import React, {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import {LoginContext} from '../../Context/login-context';
import './Login.css';

const login = (props) => {

    const loginContext = useContext(LoginContext);
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    
    const loginHandler = (event) => {
        loginContext.login(enteredUserName, enteredPassword);
        console.log("Sign in button is clicked");
        event.preventDefault();        
    }

    return (
        <section className="main-form">            
            {loginContext.isLogged ? <Redirect to="/customer"/> : <Redirect to="/"/>}
            
                <form onSubmit={loginHandler} >                
                    <div className="login">
                        <h2>Please login to continue..</h2>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={enteredUserName} 
                                onChange={event => setEnteredUserName(event.target.value)} />
                    </div>
                    <div className="login">
                        <label htmlFor="password">Password</label>           
                        <input type="password" id="password" value={enteredPassword} 
                                onChange={event => setEnteredPassword(event.target.value)} />
                        <button type="submit" >Sign in</button>        
                    </div> 
                    
                </form>
                <div className="login"> 
                    <button>Sign up</button>        
                </div>      
                        
        </section>
    )
}

export default login; 