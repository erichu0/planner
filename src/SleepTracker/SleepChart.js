import React/*, { useState }*/ from 'react'
//
import { Bar } from 'react-chartjs-2';


const SleepChart = (data, options) => {
    

    return (
        <div className='bg-black'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default SleepChart