import React from 'react';

const Task = ({ task, taskText, toDos, setToDos, doneToDos, setDoneToDos }) => {
    const removeHandler = (e) => {
        setToDos(toDos.filter(toDo => toDo.id !== task.id));
    }

    const completeHandler = (e) => {
        console.log(task)
        setToDos(toDos.filter(toDo => toDo.id !== task.id));
        setDoneToDos([...doneToDos, task]);
    }

    return (
        <div>
            <p className='w1 inline'>{taskText}</p>
            <button onClick={completeHandler}>Done</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    );
}

export default Task