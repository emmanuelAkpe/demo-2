import React from 'react'
import './Register.css'

import { useState } from 'react';
import  { Link } from 'react-router-dom'


const Register = () => {
    const  [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const register = (e) => {
      e.preventDefault();
      setEmail('');
      setPassword('');
    }
    return (
        <div className='register'>
          <Link to='/'>
              <img src='/images/logo.png' className='register-logo' alt='logo'/>
          </Link>
           <div className='register-container'>
               <h1>Create Account</h1>
               <form>
                 <h5>E-mail</h5>
                 <input
                   type='text'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   />
                     <h5>Password</h5>
                 <input
                   type='password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   />
                <button type='submit' onClick={register} className='continue' style={{background:'teal'}}>
                  Continue
                </button>
                  <div className='detail'>
                      <p>Already have an account?</p>

                      <Link to='/login' className='signin-link'>
                         <p>Sign In</p>
                      </Link>
                   </div>
                 </form>
           </div>
        </div>
    )
}

export default Register
