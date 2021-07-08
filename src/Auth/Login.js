import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='signup w2 mb-8 bg-white p-4'>
            <h1 className='font-bold text-2xl mb-4'>Log In Page</h1>
            <form>
                <h2>Username</h2>
                <input type='text' className='rounded-md p-2 mb-2 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <h2>Password</h2>
                <input type='text' className='rounded-md p-2 mb-6 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <br />
                <Link to="/todolist" className='rounded-md p-2 bg-yellow-500 text-white'>Log In</Link>
            </form>
        </div>


    )
}

export default Login

