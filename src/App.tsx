import React, {useState} from 'react';
import style from './App.module.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {
    let [numbers, setNumbers] = useState(0)
    let [maxValue, setMaxValue] = useState(5)

    const setStartValue = (value: number) => setNumbers(value)

    const plusOne = () => setNumbers(numbers + 1)
    const reset = () => setNumbers(0)

    return (
        <div className={style.wrapper}>
            <Settings/>
            <Counter numbers={numbers}
                     maxValue={maxValue}
                     plusOne={plusOne}
                     reset={reset}/>
        </div>
    )
}

export default App;
