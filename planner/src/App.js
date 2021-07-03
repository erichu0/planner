import React, { Component } from "react";
import './App.css';
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ToDoList from './ToDoList/ToDoList'


class App extends Component {
  render() {
    return (
      <div className='flex flex-col justify-items-center'>
        <Signup />
        <Login />
        <ToDoList className="w1" />
      </div>
    );
  }
}

export default App;
