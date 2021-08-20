import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='bg-white pt-4 pb-4'>
            <Link to='/login' className='w2 border-r-2 pt-6 p-4 '>Log In</Link>
            <Link to='/signup' className='w2 border-r-2 p-4'>Sign Up</Link>
            <Link to='/todolist' className='w2 border-r-2 p-4'>To Do List</Link>
            <Link to='/sleeptracker' className='w2 border-r-2 p-4'>Sleep Tracker</Link>
            <Link to='/' className='w2 pt-6 p-4'>Home</Link>
        </nav>
    );
}

export default Nav