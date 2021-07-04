import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const Login = () => {
    const defaultHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='signup w2 mb-8 bg-white p-4'>
            <h1 className='font-black text-2xl mb-4'>Log In Page</h1>
            <form>
                <h2>Username</h2>
                <input type='text' className='rounded-md p-2 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <h2>Password</h2>
                <input type='text' className='rounded-md p-2 bg-gray-100 focus:bg-gray-200 focus:outline-none'></input>
                <br></br>
                <button type='submit' onClick={defaultHandler} className='rounded-md p-2 mt-4 bg-yellow-500 text-white'><Link to="/todolist">Log In</Link></button>
            </form>
        </div>


    )
}

export default Login

