
import {Link,  useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import jwt_decode from "jwt-decode";


import React,{useState} from 'react'
import './Login.css'


// import React from 'react'

function Login() {
  const navigate = useNavigate();
  const [errMessage,setErrMessage] = useState(null)
  const [authTokens,setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

  let loginUser = async(e)=>{
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/api/v1/auth/token/',{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({"username" : e.target.username.value, "password":e.target.password.value})
    })
    let data = await response.json()
    if(response.status === 200){
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        navigate('/')
    }else if(response.status === 401){
        setErrMessage(data)
    }else if(response.status === 400){
        setErrMessage(data)
    }
    else{
        alert('Something went wrong!')
    }
}


  return (
    <section id="login" className="wrapper">
        <form className="content" onSubmit={loginUser}>            
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter your username" name="username" id="username"/>
            <p className="error-message">{errMessage && errMessage["username"]}</p>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password"/>
            <p className="error-message">{errMessage && errMessage["password"]}</p>

            <p className="error-message">{errMessage && errMessage["detail"]}</p>   
            <button type="submit">Login</button>
            <Create to="/sing">Create Account</Create>
        </form>
    </section>
  );
}

export default Login

const Create = styled(Link)``;