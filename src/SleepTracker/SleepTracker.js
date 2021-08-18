import React from 'react'
import SleepChart from './SleepChart';
import SleepInput from './SleepInput'

const SleepTracker = () => {

    const [time, setTime] = useState([]);

    let d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let times = [[0, 1], [0, 1],[0, 1],[0, 1],[0, 1],[0, 1],[0, 1]];

    return (
        <div className='bg-black'>
            <SleepInput 
                time={time}
                setTime={setTime}
                times={times}
                data={data}
                options={options}
            />
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