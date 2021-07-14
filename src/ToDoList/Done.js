import React from 'react';
import DoneTask from './DoneTask';

const Done = ({ doneToDos, setDoneToDos, donetodoid, deletedCount, setDeletedCount }) => {
    return (
        <div className='section'>
            <h3 className='w1'>Done</h3>
            {doneToDos.map(doneToDo =>
                <DoneTask
                    key={donetodoid} 
                    taskText={doneToDo.text}
                    doneToDo={doneToDo}
                    setDoneToDos={setDoneToDos}
                    doneToDos={doneToDos}
                    deletedCount={deletedCount}
                    setDeletedCount={setDeletedCount}
                />)}
        </div>
    );
}

export default Done