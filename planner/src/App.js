import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ToDoList from './ToDoList/ToDoList'


class App extends Component {
  render() {
    return (
      <Router>
        <div className='flex flex-col justify-items-center'>
            <Signup />
            <Login />
        </div>
        <Switch>
          <Route path='/todolist' exact component={ToDoList} />
        </Switch>
      </Router >
    );
  }
}

export default App;
