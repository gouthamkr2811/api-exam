
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Login.css'


import React from 'react'

function Login() {
  return (
    <section id="login" className="wrapper">
        <form className="content" onSubmit="">            
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter your username" name="username" id="username"/>
            <p className="error-message"></p>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password"/>
            <p className="error-message"></p>

            <p className="error-message"></p>   
            <button type="submit">Login</button>
            <Create to="/sing">Create Account</Create>
        </form>
    </section>
  );
}

export default Login

const Create = styled(Link)``;