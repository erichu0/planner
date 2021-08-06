import React from 'react'
import SleepChart from './SleepChart';

const SleepTracker = () => {
    const timeHandler = (e) => {
        e.preventDefault();
        // setTime([...time, new Date().getMinutes()]);
    }

    const sleepHandler = (e) => {
        e.preventDefault();
        // times.shift()
        // times.push([1, 3]);
        // console.log(times);
        // data.datasets.data = times;
    }

    const wakeUpHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-black'>
            <form>
                <input type='text'></input>
                <button className='bg-yellow-500' onClick={timeHandler}>hello</button>
                <button className='bg-yellow-500' onClick={sleepHandler}>Sleep Now</button>
                <button className='bg-yellow-500' onClick={wakeUpHandler}>Wake up Now</button>
            </form>
            <div className='signup w3 p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
            </div>
            <SleepChart />
        </div>
    )
}

export default SleepTracker