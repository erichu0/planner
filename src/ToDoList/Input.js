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
        <div className='section w1'>
            <h3>Input</h3>
            <form className='input-form task'>
                <input onChange={typeHandler} value={inputText} type='text' className='type-field'></input>
                <button onClick={submitHandler} type='submit' className=' todo-button w1'>Add</button>
            </form>
        </div>
    )
}

export default Input;