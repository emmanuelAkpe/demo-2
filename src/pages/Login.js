import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom'




const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



   const signIn = (e) => {
       e.preventDefault();
       setEmail('');
       setPassword('');
   }
    return (
        <div className='login'>
          <Link to='/'>
              <img src="/images/logo.png" className='login-logo' alt='logo'/>
          </Link>
          <div className='login-container'>
              <h1>Sign In</h1>
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
                    onChange={(e) =>  setPassword(e.target.value)}
                    />

                 <button type='submit' onClick={signIn} className='login-signIn'>
                     Sign In
                 </button>
              </form>

               <p>By continuing, you agree to CompuLab's Conditions of Use and Privacy Notice.</p>
          </div>

          <p>New here ?</p>
          <Link to='/register'>
              <button className='login-register'>Create Your CompuLab Account</button>
          </Link>
        </div>
    )
}

export default Login
