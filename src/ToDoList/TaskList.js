import React from 'react';
import Task from './Task';

const TaskList = ({ toDos, setToDos, setDoneToDos, doneToDos }) => {
    return (
        <div className='section'>
            <h3 className='w1'>Tasks</h3>
            {toDos.map(task => (
                <Task
                    task={task}
                    taskText={task.text}
                    key={task.id}
                    toDos={toDos}
                    setToDos={setToDos}
                    setDoneToDos={setDoneToDos}
                    doneToDos={doneToDos}
                />
            ))}
        </div>
    )
}

export default TaskList;