import React from 'react'
//
import { Bar } from 'react-chartjs-2';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const data = {
    labels: [
        [monthNames[new Date().getMonth()], new Date().getMonth()], 
        [monthNames[new Date().getMonth()], new Date().getMonth()], 
        [monthNames[new Date().getMonth()], new Date().getMonth()], 
        [monthNames[new Date().getMonth()], new Date().getMonth()], 
        [monthNames[new Date().getMonth()], new Date().getMonth()], 
        [monthNames[new Date().getMonth()], new Date().getMonth()], 

    ],
    datasets: [
                {
                    label: '# of Votes',
                    data: [[-3, 5], [2, 10], [1, 3], [-4, -1], [4, 8], [3, 5]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                },
            ],
};

const options = {
    scales: {
        y: {
            min: -5,
            max: 12
        }
    }
};


const SleepTracker = () => {
    return (
        <div className='bg-white'>
            <div className='signup w3 p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
            </div>
            <div className='header'>
                <h1 className='title'>Line Chart</h1>
                <div className='links'>
                    <a
                        className='btn btn-gh'
                        href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
                    >
                        Github Source
                    </a>
                </div>
            </div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default SleepTracker