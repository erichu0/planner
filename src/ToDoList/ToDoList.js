import React, { useState, useEffect, useContext, useRef } from "react";

import './ToDoList.css';

import Input from "./Input";
import TaskList from "./TaskList";
import Done from "./Done";
import { DatabaseContext } from "../firebase";

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);
    const [deletedCount, setDeletedCount] = useState(0);

    const database = useContext(DatabaseContext);

    var toDoData, doneToDoData;

    function setFirebase() {
        console.log('setting');
        toDoData = toDos;
        //console.log("tododata", toDoData)
        database.ref('toDos').set(toDoData);

        doneToDoData = doneToDos;
        //console.log("donetododata", doneToDoData)
        database.ref('doneToDos').set(doneToDoData);
    }

    function getFirebase() {
        database.ref('toDos').get().then((snapshot) => {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                setToDos(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        database.ref('doneToDos').get().then((snapshot) => {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                setDoneToDos(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    // const saveLocalTodos = () => {
    //     localStorage.setItem('toDos', JSON.stringify(toDos));
    //     localStorage.setItem('doneToDos', JSON.stringify(doneToDos));
    // }

    // const getLocalTodos = () => {
    //     if (localStorage.getItem('toDos') === null) {
    //         localStorage.setItem('toDos', JSON.stringify([]));
    //     } else {
    //         setToDos(JSON.parse(localStorage.getItem('toDos', JSON.stringify(toDos))));
    //         //setToDos(["waiting for firebase", "still waiting"]);
    //     };
    //     if (localStorage.getItem('doneToDos') === null) {
    //         localStorage.setItem('doneToDos', JSON.stringify([]));
    //     } else {
    //         setDoneToDos(JSON.parse(localStorage.getItem('doneToDos', JSON.stringify(doneToDos))));
    //         //setDoneToDos(["waiting for firebase", "still waiting"]);
    //     };
    // }

    useEffect(() => {
        getFirebase();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            setFirebase()
            //saveLocalTodos();
        } else didMount.current = true;
        // eslint-disable-next-line
    }, [deletedCount, toDos, doneToDos])

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
                doneToDos={doneToDos}
                deletedCount={deletedCount}
                setDeletedCount={setDeletedCount} />
        </div>
        <div className="done">
            <Done
                doneToDos={doneToDos}
                setDoneToDos={setDoneToDos}
                toDos={toDos}
                deletedCount={deletedCount}
                setDeletedCount={setDeletedCount} />
        </div>

    </div>
)
}

export default ToDoList;