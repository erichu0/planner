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
        <div className='task'>
            <p className='w1 inline task-text'>{taskText}</p>
            <div className='task-button-div'>
                <button onClick={completeHandler} className='w1'>Done</button>
                <button onClick={removeHandler} className='w1'>Remove</button>
            </div>
        </div>
    );
}

export default Task