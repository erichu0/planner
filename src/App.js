import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Nav from "./Nav";
import HomePage from "./HomePage/HomePage";
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ToDoList from './ToDoList/ToDoList'
//import SleepTracker from "./SleepTracker/SleepTracker";

import { database, DatabaseContext } from "./firebase.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <DatabaseContext.Provider value={database}>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/todolist' component={ToDoList} />
          {/* <Route path='/sleeptracker' component={SleepTracker} /> */}
        </DatabaseContext.Provider>
      </Router>
    );
  }
}

export default App;
