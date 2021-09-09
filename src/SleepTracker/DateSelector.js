import React from 'react'

const DateSelector = (sleepData) => {
    console.log(sleepData)
    let sleepDataKeys = Object.keys(sleepData["sleepData"]);

    return (
        <div>
            <select className='temp time-input h-9'>
                <option>Hello</option>
                {Array.from({ length: sleepDataKeys.length }, (_, i) => <option>{sleepDataKeys[sleepDataKeys.length - i]}</option>)}
            </select>
        </div>
    )
}

export default DateSelector;