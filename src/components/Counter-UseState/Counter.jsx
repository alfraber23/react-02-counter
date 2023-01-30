import React from 'react'
import { useState } from 'react';
import { ButtonApp, ButtonReset } from './';
import './Buttons.css';
import './Counter.css';


export const Counter = ({ initialValue = 0 }) => {

    const [number, setnumber] = useState(initialValue)

    const increaseCount = () => {
        setnumber(number + 1)
    }
    const decreaseCount = () => {
        setnumber(number - 1)
    }
    const resetCount = () => {
        setnumber(initialValue)
    }

    return (
        <>
            <h2>Counter</h2>
            <div className='counter-container'>
                <p className='counter'>{number}</p>
            </div>
            <div className='counter-container buttons-container'>
                <ButtonApp className='button-clic button-counter' onClick={increaseCount}>+</ButtonApp>
                <ButtonApp className='button-clic button-counter' onClick={decreaseCount}>-</ButtonApp>
                <ButtonApp className='button-reset button-counter' onClick={resetCount}>Reset</ButtonApp>
            </div>
            {/* <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={resetCount}>reset</button> */}
        </>
    )
}
