import React, { useState, useEffect } from 'react';

const Input = ({ setSleepData, sleepData, wakeData, setWakeData }) => {
    const [buttonStatus, setButtonStatus] = useState(true); //true = sleep, false = wake
    const [typeStatus, setTypeStatus] = useState(true); //true = manual, false = auto

    let decimalTime;
    const statusHandler = (e) => {
        e.preventDefault();
        setTypeStatus(!typeStatus);
    }

    const autoHandler = (e) => {
        e.preventDefault();

        const date = new Date();
        decimalTime = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 60 / 60;

        if (buttonStatus === true) {
            setSleepData([...sleepData, decimalTime]);

            setButtonStatus(false);
        } else if (buttonStatus === false) {
            setWakeData([...wakeData, decimalTime]);

            setButtonStatus(true);
        }
    }

    const [hours, sethours] = useState(0);
    const [minutes, setMinutes] = useState("00");
    const [ampm, setAmPm] = useState('AM');

    const hoursHandler = (e) => {
        e.preventDefault();
        sethours(e.target.value);
    }

    const minutesHandler = (e) => {
        e.preventDefault();
        setMinutes(e.target.value);
    }

    const ampmHandler = (e) => {
        e.preventDefault();
        setAmPm(e.target.value);
    }

    const manualHandler = (e) => {
        e.preventDefault();

        decimalTime = parseFloat(hours) + parseFloat(minutes)/60;
        
        if (ampm === "AM") {
            decimalTime += 12;
        }

        if (hours === 12) {
            decimalTime -= 12;
        }

        if (buttonStatus === false) {
            setSleepData([...sleepData, decimalTime]);

            setButtonStatus(true);
        } else if (buttonStatus === true) {
            setWakeData([...wakeData, decimalTime]);

            setButtonStatus(false);
        }

        sethours(0);
        setMinutes(0);
    }

    useEffect(() => {
        console.log("Sleep Times", sleepData);
        console.log("Wake Times", wakeData);
    }, [sleepData, wakeData])

    return (
        <div>
            <p>Input</p>
            <p className='inline'>Input Type: {typeStatus ? "Auto" : "Manual"}</p>
            <button onClick={statusHandler} className='temp'>{typeStatus ? "Change to Manual" : "Change to Auto"}</button>
            <br />
            {typeStatus ?
                (
                    <>
                        {buttonStatus ?
                            (
                                <button onClick={autoHandler} className='temp'>Sleep Now</button>
                            ) : (
                                <button onClick={autoHandler} className='temp'>Wake Up Now</button>
                            )
                        }
                        <br />
                    </>
                ) : (
                    <div>
                        <form>
                            <label>Time (Hours : Minutes)</label>
                            <input type="number" onChange={hoursHandler} value={hours} className='temp time-input' min="1" max="12"></input>
                            <label>:</label>
                            <input type="number" onChange={minutesHandler} value={minutes} className='temp time-input' min="0" max="59"></input>

                            <select className='temp time-input h-7' onChange={ampmHandler} value={ampm}>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                            {buttonStatus ?
                                (
                                    <button onClick={manualHandler} type='submit' className='temp'>Sleep</button>
                                ) : (
                                    <button onClick={manualHandler} type='submit' className='temp'>Wake Up</button>
                                )
                            }
                        </form>
                        {}
                    </div>
                )
            }
        </div>
    )
}

export default Input;