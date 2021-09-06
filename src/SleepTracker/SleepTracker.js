import React, { useState, useContext } from 'react'

import './SleepStyle.css'

import SleepInput from './SleepInput';
import SleepChart from './SleepChart';

import { DatabaseContext } from "../firebase";

const App = () => {
  const [sleepData, setSleepData] = useState({});
  const [wakeData, setWakeData] = useState({});

  const database = useContext(DatabaseContext);

  function setFirebase() {
    database.ref('sleepData').set(sleepData);
    database.ref('wakeData').set(wakeData);
  }

  return (
    <div className='bg-black text-white px-4'>
      <h1 className="text-2xl font-bold">Sleep Tracker</h1>
      <SleepInput
        sleepData={sleepData}
        setSleepData={setSleepData}
        wakeData={wakeData}
        setWakeData={setWakeData}
        setFirebase={setFirebase}
      />
      <SleepChart
        sleepData={sleepData}
        wakeData={wakeData}
      />
    </div>
  )
}

export default App;