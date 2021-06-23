import React, { useState } from "react";

import Input from "./Input";
import TaskList from "./TaskList";
import Done from "./Done";

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);

    return (
        <div>
            <h1 className="w1">To Do List</h1>
            <Input inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos} />
            <TaskList inputText={inputText} toDos={toDos} setToDos={setToDos} setDoneToDos={setDoneToDos} doneToDos={doneToDos} />
            <Done doneToDos={doneToDos} setDoneToDos={setDoneToDos} toDos={toDos} />
        </div>
    )
}

export default ToDoList;