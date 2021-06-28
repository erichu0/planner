import React from 'react';

const Input = ({ inputText, setInputText, toDos, setToDos }) => {
    const typeHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, { text: inputText, id: Math.random() * 10000 }]);
        setInputText("");
        console.log("Submitted");
    }

    return (
        <div className='section'>
            <h3 className='w1'>Input</h3>
            <form className='input-form task'>
                <input onChange={typeHandler} value={inputText} type='text' className='w1 type-field'></input>
                <button onClick={submitHandler} type='submit' className='w1'>Add</button>
            </form>
        </div>
    )
}

export default Input;