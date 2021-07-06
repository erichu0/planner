import React, { useState, useEffect, useContext } from "react";

import './ToDoList.css';

import Input from "./Input";
import TaskList from "./TaskList";
import Done from "./Done";
import { DatabaseContext } from "../firebase";

const ToDoList = () => {
    

    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);

    const database = useContext(DatabaseContext);
    console.log(database);

    var toDoData, doneToDoData;

    const uploadFirebase = () => {
        toDos.forEach(todo => {
            toDoData = {
                name: todo.text,
                id: todo.id
            }
        })
        var ref = database.ref('toDos');
        ref.push(toDoData);

        doneToDos.forEach(todo => {
            doneToDoData = {
                name: todo.text,
                id: todo.id
            }
        })
        var ref = database.ref('doneToDos');
        ref.push(doneToDoData);
    }

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
        getLocalTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        saveLocalTodos();
        uploadFirebase();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toDos, doneToDos])

    return (
        <div className='to-do-list'>
            <h1 className="w1 title">To Do List</h1>
            <div className="input">
                <Input
                    inputText={inputText}
                    setInputText={setInputText}
                    toDos={toDos}
                    setToDos={setToDos} />
            </div>
            <div className="task-list">
                <TaskList
                    inputText={inputText}
                    toDos={toDos}
                    setToDos={setToDos}
                    setDoneToDos={setDoneToDos}
                    doneToDos={doneToDos} />
            </div>
            <div className="done">
                <Done
                    doneToDos={doneToDos}
                    setDoneToDos={setDoneToDos}
                    toDos={toDos} />
            </div>
            
        </div>
    )
}

export default ToDoList;