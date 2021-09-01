import React, { useState } from 'react'

import './SleepStyle.css'

import SleepInput from './SleepInput';
import SleepChart from './SleepChart';

const App = () => {
  const [sleepData, setSleepData] = useState({});
  const [wakeData, setWakeData] = useState({});

  return (
    <div className='bg-black text-white px-4'>
      <h1 className="text-2xl font-bold">Sleep Tracker</h1>
      <SleepInput 
        sleepData={sleepData} 
        setSleepData={setSleepData}
        wakeData={wakeData} 
        setWakeData={setWakeData}
      />
      <SleepChart
        sleepData={sleepData} 
        wakeData={wakeData}
      />
    </div>
  )
}

export default App;