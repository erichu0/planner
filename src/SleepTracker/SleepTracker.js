import React, { useState, useContext, useEffect } from 'react'

import './SleepStyle.css'

import SleepInput from './SleepInput';
import SleepChart from './SleepChart';

import { DatabaseContext } from "../firebase";

const SleepTracker = () => {
  const [sleepData, setSleepData] = useState({});
  const [wakeData, setWakeData] = useState({});
  const [buttonStatus, setButtonStatus] = useState(true); //true = sleep, false = wake

  const database = useContext(DatabaseContext);

  function setFirebase() {
    database.ref('sleepData').set(sleepData);
    database.ref('wakeData').set(wakeData);
    database.ref('buttonStatus').set(buttonStatus);
  }

  function getFirebaseSleepData() {
    database.ref('sleepData').get().then((snapshot) => {
      if (snapshot.exists()) {
        setSleepData(snapshot.val());
      } else {
        console.log("No Sleep Data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function getFirebaseWakeData() {
    database.ref('wakeData').get().then((snapshot) => {
      if (snapshot.exists()) {
        setWakeData(snapshot.val());
      } else {
        console.log("No Wake Data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function getFirebaseButtonStatus() {
    database.ref('buttonStatus').get().then((snapshot) => {
      if (snapshot.exists()) {
        setButtonStatus(snapshot.val());
      } else {
        console.log("No Button Status available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function getFirebase() {
    getFirebaseSleepData();
    getFirebaseWakeData();
    getFirebaseButtonStatus();
  }


  useEffect(_ => {
    getFirebase();
  }, [])

  return (
    <div className='bg-black text-white px-4'>
      <h1 className="text-2xl font-bold">Sleep Tracker</h1>
      <SleepInput
        sleepData={sleepData}
        setSleepData={setSleepData}
        wakeData={wakeData}
        setWakeData={setWakeData}
        setFirebase={setFirebase}
        buttonStatus={buttonStatus}
        setButtonStatus={setButtonStatus}
        database={database}
        getFirebaseButtonStatus={getFirebaseButtonStatus}
      />
      <SleepChart
        sleepData={sleepData}
        wakeData={wakeData}
      />
    </div>
  )
}

export default SleepTracker;