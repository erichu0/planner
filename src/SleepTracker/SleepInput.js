import React from 'react'

const SleepInput = (time, setTime, times, data, options) => {
    let d = new Date();

    let times = [[0, 1], [0, 1],[0, 1],[0, 1],[0, 1],[0, 1],[0, 1]];

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
            
            <SleepChart
                data={data}
                options={options}
             />
        </div>
    )
}

export default SleepTracker