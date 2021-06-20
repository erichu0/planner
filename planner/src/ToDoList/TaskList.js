import React from 'react';
import Task from './Task';

const TaskList = ({ toDos }) => {
    return (
        <div>
            <h3 className='w1'>Tasks</h3>

            <p className='w1'>be better</p>
            {toDos.map((taskText) => (
                <Task taskText={taskText} />
            ))}

        </div>
    )
}

export default TaskList;