import React from 'react';

const Input = ({ inputText, setInputText, toDos, setToDos }) => {
    const typeHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, { text: inputText, id: Math.random() * 10000 }]);
        setInputText("");
        console.log("Submitted");
    }

    return (
        <div>
            <h3 className='w1'>Input</h3>
            <form>
                <input onChange={typeHandler} value={inputText} type='text' className='w1'></input>
                <button onClick={submitHandler} type='submit' className='w1'>Add</button>
            </form>
        </div>
    )
}

export default Input;