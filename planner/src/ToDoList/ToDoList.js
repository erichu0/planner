import React, { useState, useEffect } from "react";

import './ToDoList.css';

import Input from "./Input";
import TaskList from "./TaskList";
import Done from "./Done";

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);

    const saveLocalTodos = () => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('toDos') === null) {
            localStorage.setItem('toDos', JSON.stringify([]));
        } else {
            setToDos(JSON.parse(localStorage.getItem('toDos', JSON.stringify(toDos))));
        }
    }

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        saveLocalTodos();
    }, [toDos])

    return (
        <div className='to-do-list'>
            <h1 className="w1">To Do List</h1>
            <Input
                inputText={inputText}
                setInputText={setInputText}
                toDos={toDos}
                setToDos={setToDos} />
            <TaskList
                inputText={inputText}
                toDos={toDos}
                setToDos={setToDos}
                setDoneToDos={setDoneToDos}
                doneToDos={doneToDos} />
            <Done
                doneToDos={doneToDos}
                setDoneToDos={setDoneToDos}
                toDos={toDos} />
        </div>
    )
}

export default ToDoList;