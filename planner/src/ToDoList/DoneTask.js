import React from 'react';

const DoneTask = ({ taskText, doneToDo, setDoneToDos, doneToDos }) => {
    const deleteHandler = (e) => {
        setDoneToDos(doneToDos.filter(toDo => doneToDo.id !== toDo.id))
    }
    return (
        <div className='task'>
            <p className='w1 inline strikethrough task-text'>{taskText}</p>
            <button onClick={deleteHandler} className='w1'>Delete</button>
        </div>
    )
}

export default DoneTask;