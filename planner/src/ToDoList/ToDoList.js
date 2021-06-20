import React, { Component, useState } from "react";

import Input from "./Input"
import TaskList from "./TaskList"

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);

    return (
        <div>
            <h1 className="w1">To Do List</h1>
            <Input inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos} />
            <TaskList inputText={inputText} toDos={toDos}/>
        </div>
    )
}

export default ToDoList;