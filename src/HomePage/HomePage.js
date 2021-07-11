import React from 'react'
// eslint-disable-next-line
// import { BrowserRouter as Router, Link } from 'react-router-dom'
import ToDoList from '../ToDoList/ToDoList'
import SleepTracker from '../SleepTracker/SleepTracker'


const HomePage = () => {
    return (
        <>
            <ToDoList />
            <SleepTracker />
        </>
    )
}

export default HomePage;