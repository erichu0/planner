import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ sleepData, wakeData }) => {
    let date = new Date().getDate();
    const data = {
        labels: [date - 6, date - 5, date - 4, date - 3, date - 2, date - 1, date],
        datasets: [
            {
                data: [[sleepData[wakeData.length - 6], wakeData[wakeData.length - 6]], [sleepData[wakeData.length - 5], wakeData[wakeData.length - 5]], [sleepData[wakeData.length - 4], wakeData[wakeData.length - 4]], [sleepData[wakeData.length - 3], wakeData[wakeData.length - 3]], [sleepData[wakeData.length - 2], wakeData[wakeData.length - 2]], [sleepData[wakeData.length - 1], wakeData[wakeData.length - 1]]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                min: 0,
                max: 24,
            }
        }
    };

    return (
        <div>
            <p>Chart</p>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Chart;