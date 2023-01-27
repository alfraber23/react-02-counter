import React from 'react'
import { useState } from 'react';
import { ButtonApp, ButtonReset } from './';



export const Counter = ( {initialValue = 0}) => {

    const [number, setnumber] = useState(initialValue)

    const increaseCount = () => {
        setnumber(number+1)
    }
    const decreaseCount = () => {
        setnumber(number-1)
    }
    const resetCount = () => {
        setnumber(initialValue)
    }

    return (
        <>
            <h2>Counter</h2>
            <h2>{number}</h2>
            <ButtonApp onClick={increaseCount}>+</ButtonApp>
            <ButtonApp onClick={decreaseCount}>-</ButtonApp>
            <ButtonApp onClick={resetCount}>Reset</ButtonApp>
            <ButtonReset onClick={setnumber} initialValue={50}>Reste 50</ButtonReset>

            {/* <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={resetCount}>reset</button> */}
        </>
    )
}
