import React, { useState } from 'react'

import './sleepStyle.css'

import SleepInput from './SleepInput';
import SleepChart from './SleepChart';

const App = () => {
  const [sleepData, setSleepData] = useState([1, 0, 0, 0, 0, 0, 0]);
  const [wakeData, setWakeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className='bg-white px-4'>
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