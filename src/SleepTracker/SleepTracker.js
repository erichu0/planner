import React from 'react'
//
import { Bar } from 'react-chartjs-2';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let d = new Date();

const data = {
    labels: [
        [monthNames[d.getMonth()], d.getDate() - 6],
        [monthNames[d.getMonth()], d.getDate() - 5],
        [monthNames[d.getMonth()], d.getDate() - 4],
        [monthNames[d.getMonth()], d.getDate() - 3],
        [monthNames[d.getMonth()], d.getDate() - 2],
        [monthNames[d.getMonth()], d.getDate() - 1],
        [monthNames[d.getMonth()], d.getDate()],
    ],
    datasets: [
        {
            label: 'hours sleeping',
            data: [[3, 5], [2, 10], [1, 3], [4, 1], [4, 8], [3, 5], [4, 11]],
            backgroundColor: 'rgb(33, 120, 255)',
            borderColor: 'rgb(255, 255, 255)',
            color: 'rgb(255, 255, 255)',
        },
    ],
};

const options = {
    scales: {
        y: {
            min: 0,
            max: 14,
            ticks: {
                stepSize: 1,
                callback: function (value) {
                    switch (value) {
                        case 0:
                            return '10:00';
                        case 1:
                            return '11:00';
                        case 2:
                            return '10:00';
                        case 3:
                            return '9:00';
                        case 4:
                            return '8:00';
                        case 5:
                            return '7:00';
                        case 6:
                            return '6:00';
                        case 7:
                            return '5:00';
                        case 8:
                            return '4:00';
                        case 9:
                            return '3:00';
                        case 10:
                            return '2:00';
                        case 11:
                            return '1:00';
                        case 12:
                            return '12:00';
                        case 13:
                            return '11:00';
                        case 14:
                            return '12:00';
                        default:
                            return 'something went wrong'
                    }
                }
            }
        }
    }
};


const SleepTracker = () => {
    return (
        <div className='bg-black'>
            <div className='signup w3 p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
            </div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default SleepTracker