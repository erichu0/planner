import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ sleepData, wakeData }) => {
    let date = new Date().getDate();
    const data = {
        labels: [date - 6, date - 5, date - 4, date - 3, date - 2, date - 1, date],
        datasets: [
            {
                data: [[sleepData[wakeData.length - 7], wakeData[wakeData.length - 7]], [sleepData[wakeData.length - 6], wakeData[wakeData.length - 6]], [sleepData[wakeData.length - 5], wakeData[wakeData.length - 5]], [sleepData[wakeData.length - 4], wakeData[wakeData.length - 4]], [sleepData[wakeData.length - 3], wakeData[wakeData.length - 3]], [sleepData[wakeData.length - 2], wakeData[wakeData.length - 2]], [sleepData[wakeData.length - 1], wakeData[wakeData.length - 1]]],
                backgroundColor: [
                    'rgb(147, 197, 253)'
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
            tooltip: {
                callbacks: {
                    title: _ => {return new Date()},
                    label: _ => {return "Data"}
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 24,
                reverse: true
            }
        },

    };

    return (
        <div>
            <p>Chart</p>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Chart;