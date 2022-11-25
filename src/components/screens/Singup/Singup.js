import React from 'react'
import {Link} from 'react-router-dom';

import './Singup.css'


function Signup () {

  return (
    <section id="signup" className="wrapper">
        <form className="content" onSubmit="" >
            <h1>Signup</h1>           
                <label htmlFor='first_name'>First Name</label>
                <input type="text" name="first_name" id='first_name' required />

                <label htmlFor='last_name'>Last Name</label>
                <input type="text" name="last_name" id='last_name' />

                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id='email' required/> 

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" name="username" id="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" name="password" id="password" required/>

                <p className="error-message"></p>

                <button type="submit">Create Account</button>

                <Link to="/login">Login</Link>
        </form>
    </section>
  )
}

export default Signup