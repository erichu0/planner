import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='signup w2 bg-white p-4'>
            <h1 className='font-bold text-2xl mb-4'>Sign Up Page</h1>
            <form>
                <h2>Username</h2>
                <input type='text' className='rounded-md p-2 mb-2 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <h2>Password</h2>
                <input type='text' className='rounded-md p-2 mb-6 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <br></br>
                <Link to="/login" className='rounded-md p-2 bg-yellow-500 text-white'>Sign Up</Link>
            </form>
        </div>
    )
}

export default Signup

