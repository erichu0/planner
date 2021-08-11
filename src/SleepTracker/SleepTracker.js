import React from 'react'
import SleepChart from './SleepChart';

const SleepTracker = () => {

    const [time, setTime] = useState([]);

    let d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let times = [[0, 1], [0, 1],[0, 1],[0, 1],[0, 1],[0, 1],[0, 1]];

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
                                return '12:00 AM';
                            case 1:
                                return '11:00 AM';
                            case 2:
                                return '10:00 AM';
                            case 3:
                                return '9:00 AM';
                            case 4:
                                return '8:00 AM';
                            case 5:
                                return '7:00 AM';
                            case 6:
                                return '6:00 AM';
                            case 7:
                                return '5:00 AM';
                            case 8:
                                return '4:00 AM';
                            case 9:
                                return '3:00 AM';
                            case 10:
                                return '2:00 AM';
                            case 11:
                                return '1:00 AM';
                            case 12:
                                return '12:00 PM';
                            case 13:
                                return '11:00 PM';
                            case 14:
                                return '10:00 PM';
                            default:
                                return 'something went wrong';
                        }
                    }
                }
            }
        }
    };
    const timeHandler = (e) => {
        e.preventDefault();
        setTime([...time, new Date().getMinutes()]);
    }

    const sleepHandler = (e) => {
        e.preventDefault();
        times.shift()
        times.push([1, 3]);
        console.log(times);
        data.datasets.data = times;
    }

    const wakeUpHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-black'>
            <form>
                <input type='text'></input>
                <button className='bg-yellow-500' onClick={sleepHandler}>Sleep Now</button>
                <button className='bg-yellow-500' onClick={wakeUpHandler}>Wake up Now</button>
            </form>
            <div className='signup w3 p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
            </div>
            <SleepChart
                data={data}
                options={options}
             />
        </div>
    )
}

export default SleepTracker