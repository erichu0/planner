import React, { useState } from 'react'
//
import { Bar } from 'react-chartjs-2';


const SleepTracker = () => {
    const [time, setTime] = useState([]);

    const timeHandler = (e) => {
        e.preventDefault();
        setTime([...time, new Date().getMinutes()]);
    }

    const sleepHandler = (e) => {

    }

    const timeHandler = (e) => {
        
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let d = new Date();

    let times = [[3, 5], [2, 10], [1, 3], [4, 1], [4, 8], [3, 5], [time, 11]];

    

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
                data: times.slice(-7,-1),
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
                                return '10:00';
                            default:
                                return 'something went wrong'
                        }
                    }
                }
            }
        }
    };

    return (
        <div className='bg-black'>
            <form>
                <input type='text'></input>
                <button className='bg-yellow-500' onClick={timeHandler}>hello</button>
                <button className='bg-yellow-500' onClick={sleepHandler}>Sleep Now</button>
                <button className='bg-yellow-500' onClick={timeHandler}>Wake up Now</button>
            </form>
            <div className='signup w3 p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
                <p>{time * 6}</p>
            </div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default SleepTracker