import React, { Component } from "react";
import './App.css';
import ToDoList from './ToDoList/ToDoList'

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList className="w1" />
      </div>
    );
  }
}

export default App;
