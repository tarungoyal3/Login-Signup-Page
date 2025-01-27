import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container'>

      <div className="box">

        <div className="left-box">
          <img src="/image.avif" alt="" />
        </div>

        <div className="right-box">

          <div className="heading">
            <h2>Login to your account Now</h2>
          </div>

          <div className="signup">
            <form action="">
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button type='submit'>Login</button>
            </form>
          </div>

          <p className='login-link'>
            Don't have an account? <Link to = "/">Signup</Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login