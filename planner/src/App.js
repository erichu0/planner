import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from "./HomePage/HomePage";
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ToDoList from './ToDoList/ToDoList'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/todolist' component={ToDoList} />
        </Switch>
      </Router>



      // <HomePage />
      // <div className='flex flex-col justify-items-center'>
      //     <Signup />
      //     <Login />
      // </div>
      // <ToDoList />
    );
  }
}

export default App;
