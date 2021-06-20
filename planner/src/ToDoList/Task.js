import React from 'react';

const Task = ({ taskText }) => {
    return (
        <div>
            <p className='w1'>{taskText}</p>
        </div>
    );
}

export default Task