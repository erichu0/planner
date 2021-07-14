import React, { useState, useEffect, useContext } from "react";

import './ToDoList.css';

import Input from "./Input";
import TaskList from "./TaskList";
import Done from "./Done";
import { DatabaseContext } from "../firebase";

const doesItExist = (variable) => {

}

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);
    const [deletedCount, setDeletedCount] = useState(0);

    const database = useContext(DatabaseContext);

    var toDoData, doneToDoData;

    function toDosChecker() {
        return new Promise((resolve, reject) => {
            if (toDos) { //if todos is defined
                resolve();
            } else if (0 == 1) {
                reject();
            }
        });
    }

    // function pushFirebase() {
    //     toDosChecker()
    //         .then(() => {
    //             console.log(toDos, 'bruh');
    //             if (toDos.length > 0) {
    //                 toDoData = {
    //                     name: toDos[toDos.length - 1].text,
    //                 }
    //                 /*toDos[toDos.length - 1].id = */database.ref('toDos').push(toDoData); //set the ref, task id and push at the same time

    //                 if (doneToDos.length > 0) {
    //                     doneToDoData = {
    //                         name: doneToDos[doneToDos.length - 1].text,
    //                     }
    //                     /*doneToDos[doneToDos.length - 1].id = */database.ref('doneToDos').push(doneToDoData);
    //                 }
    //             }
    //         })
    // }

    function setFirebase() {
        toDoData = toDos;
        console.log("tododata", toDoData)
        database.ref('toDos').set(toDoData);

        doneToDoData = doneToDos;
        console.log("donetododata", doneToDoData)
        database.ref('doneToDos').set(doneToDoData);
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

    // useEffect(() => {
    //     saveLocalTodos();
    //     pushFirebase();
    // }, [, doneToDos])

    useEffect(() => {
        saveLocalTodos();
        setFirebase();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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