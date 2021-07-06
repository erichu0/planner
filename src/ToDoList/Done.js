import React from 'react';
import DoneTask from './DoneTask';

const Done = ({ doneToDos, setDoneToDos }) => {
    return (
        <div className='section'>
            <h3 className='w1'>Done</h3>
            {doneToDos.map(doneToDo =>
                <DoneTask
                    key={doneToDo.id} 
                    taskText={doneToDo.text}
                    doneToDo={doneToDo}
                    setDoneToDos={setDoneToDos}
                    doneToDos={doneToDos}
                />)}
        </div>
    );
}

export default Done