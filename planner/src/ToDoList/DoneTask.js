import React from 'react';

const DoneTask = ({ taskText, doneToDo, setDoneToDos, doneToDos }) => {
    const deleteHandler = (e) => {
        setDoneToDos(doneToDos.filter(toDo => doneToDo.id!==toDo.id))
    }
    return (
        <div>
            <p className='w1 inline strikethrough'>{taskText}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default DoneTask;