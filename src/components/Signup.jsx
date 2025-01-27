import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
const Signup = () => {
    return (
        <div className='conatiner'>
            <div className="box">

                <div className="left-box">
                    <img src="/image.avif" alt="" />
                </div>

                <div className="right-box">.
                    <div className="heading">
                        <h2>Save your account Now</h2>
                    </div>

                    <div className="signup">
                        <form action="">
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <button type='submit'>Signup</button>
                        </form>
                    </div>

                    <p className='login-link'>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup