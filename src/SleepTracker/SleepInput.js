import React, { useState } from 'react'

const Input = ({ setSleepData, sleepData, wakeData, setWakeData }) => {
    const [buttonStatus, setButtonStatus] = useState(false); //false = sleep, true = wake
    const [typeStatus, setTypeStatus] = useState(false); //false = manual, true = auto

    const date = new Date();
    let decimalTime = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 60 / 60;
    const statusHandler = (e) => {
        e.preventDefault();
        setTypeStatus(!typeStatus);
    }

    const sleepHandler = (e) => {
        e.preventDefault();
        if (buttonStatus === false) {
            setSleepData([...sleepData, decimalTime]);
            console.log("Sleep Times", sleepData, decimalTime);

            setButtonStatus(true);
        }
    }

    const wakeHandler = (e) => {
        e.preventDefault();
        if (buttonStatus === true) {
            setWakeData([...wakeData, decimalTime]);
            console.log("Wake Times", wakeData, decimalTime);

            setButtonStatus(false);
        }
    }

    const manualSleepHandler = (e) => {
        e.preventDefault();
        if (buttonStatus === true) {
            setWakeData([...wakeData, decimalTime]);
            console.log("Wake Times", wakeData, decimalTime);

            setButtonStatus(true);
        }
    }

    const manualWakeHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <p>Input</p>
            <p className='inline'>Input Type: {typeStatus ? "Auto" : "Manual"}</p>
            <button onClick={statusHandler} className='temp'>{typeStatus ? "Change to Manual" : "Change to Auto"}</button>
            <br />

            {typeStatus ?
                (
                    <div>
                        {buttonStatus ?
                            (
                                <div>
                                    <button onClick={wakeHandler} className='temp'>Wake Up Now</button>
                                    <br />
                                </div>
                            ) : (
                                <div>
                                    <button onClick={sleepHandler} className='temp'>Sleep Now</button>
                                    <br />
                                </div>
                            )}
                    </div>
                ) : (
                    <div>
                        {buttonStatus ?
                            (
                                <form>
                                    <input type='text' className='temp'></input>
                                    <button onClick={manualSleepHandler} type='submit' className='temp'>Sleep</button>
                                </form>

                            ) : (
                                <form>
                                    <input type='text' className='temp'></input>
                                    <button onClick={manualWakeHandler} type='submit' className='temp'>Wake Up</button>
                                </form>
                            )}
                    </div>
                )
            }
        </div>
    )
}

export default Input;