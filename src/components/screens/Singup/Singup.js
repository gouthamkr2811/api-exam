// import React from 'react'
import {Link, useNavigate} from 'react-router-dom';


import React,{useContext, useState} from 'react'
import jwt_decode from "jwt-decode";


import './Singup.css'


function Signup () {
  const navigate = useNavigate();
  const [errMessage,setErrMessage] = useState(null)
  const [authTokens,setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)


  
  const createUser = async(e)=>{
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/api/v1/auth/create/',{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({"email" : e.target.email.value,"name" : e.target.name.value, "password":e.target.password.value})
    })
    let data = await response.json()
    if(response.status === 200){
        if(data.status_code === 6001){
            setErrMessage(data.message)               
        }else{
            let final_data = data.data
            setAuthTokens(final_data)
            setUser(jwt_decode(final_data.access))
            localStorage.setItem('authTokens', JSON.stringify(final_data))
            navigate('/')
        }
    }else{
        alert('Something went wrong!')
    }
}
  
// const Signup = () => {
  // let {createUser,errMessage} = useContext(AuthContext)

  return (
    <section id="signup" className="wrapper">
        <form className="content" onSubmit="{createUser}" >
            <h1>Signup</h1>           
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id='name' required />

                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id='email' required/> 

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" name="password" id="password" required/>

                <p className="error-message">{errMessage}</p>

                <button type="submit">Create Account</button>

                <Link to="/login">Login</Link>
        </form>
    </section>
  )
}

export default Signup