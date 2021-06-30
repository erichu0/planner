import React from 'react'

const Signup = () => {
    return (
        <div className='signup w2 mb-8 bg-white p-4'>
            <h1 className='font-black text-2xl'>Sign Up Page</h1>
            <form>
                <h3>Username</h3>
                <input type='text'></input>
                <h3>Password</h3>
                <input type='text'></input>
                <br></br>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup