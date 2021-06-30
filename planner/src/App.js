import React, { Component } from "react";
import './App.css';
import Signup from './Signup/Signup'
import ToDoList from './ToDoList/ToDoList'


class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <ToDoList className="w1" />
      </div>
    );
  }
}

export default App;
