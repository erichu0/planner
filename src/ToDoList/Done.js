import React from 'react';
import DoneTask from './DoneTask';

const Done = ({ doneToDos, setDoneToDos, donetodoid }) => {
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
                />)}
        </div>
    );
}

export default Done