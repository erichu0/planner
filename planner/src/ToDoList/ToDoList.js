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
        localStorage.setItem('doneToDos', JSON.stringify(doneToDos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('toDos') === null) {
            localStorage.setItem('toDos', JSON.stringify([]));
        } else {
            setToDos(JSON.parse(localStorage.getItem('toDos', JSON.stringify(toDos))));
        };
        if (localStorage.getItem('doneToDos') === null) {
            localStorage.setItem('doneToDos', JSON.stringify([]));
        } else {
            setDoneToDos(JSON.parse(localStorage.getItem('doneToDos', JSON.stringify(doneToDos))));
        };
    }

    useEffect(() => {
        getLocalTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        saveLocalTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toDos, doneToDos])


    return (
        <div className='to-do-list'>
            <h1 className="w1 title text-2xl"><strong>To Do List</strong></h1>
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