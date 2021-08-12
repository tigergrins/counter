import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export type titleScreenType = 'enter values and press \'set\'' | 'Incorrect value!'

type StateType = {
    startValue: number
    maxValue: number
    currentValueCounter: number
    incorrectValue: boolean
    incDisabled: boolean
    titlesScreen: Array<titleScreenType>
    blockOfScreen: boolean
    resetDisable: boolean
    setDisable: boolean
}

export function App() {
    const [state, setState] = useState<StateType>(
        {
            startValue: 0,
            maxValue: 5,
            currentValueCounter: 0,
            incorrectValue: false,
            incDisabled: false,
            titlesScreen: ['enter values and press \'set\'', 'Incorrect value!'],
            blockOfScreen: false,
            resetDisable: true,
            setDisable: true,
        })

    const increase = () => {
        if (state.currentValueCounter < state.maxValue) {
            setState(() => ({
                    ...state,
                    currentValueCounter: state.currentValueCounter + 1,
                    resetDisable: false,
                })
            )
        }

        if ((state.currentValueCounter + 1) === state.maxValue) {
            setState({
                ...state,
                currentValueCounter: state.currentValueCounter + 1,
                incDisabled: true,
                resetDisable: false,
            })
        }
    }

    const reset = () => {
        setState({
            ...state,
            currentValueCounter: state.startValue,
            incDisabled: false,
            resetDisable: true,
        })
    }

    const changeStartValue = (value: number) => {
        if (value < 0 || value >= state.maxValue) {
            setState({
                ...state,
                startValue: value,
                incorrectValue: true,
            })
        } else {
            setState({
                ...state,
                startValue: value,
                blockOfScreen: true,
                incorrectValue: false,
                incDisabled: false,
                setDisable: false,
            })
        }
    }

    const changeMaxValue = (value: number) => {
        if (value < 0 || value <= state.startValue) {
            setState({
                ...state,
                maxValue: value,
                incorrectValue: true,
            })
        } else {
            setState({
                ...state,
                maxValue: value,
                blockOfScreen: true,
                incorrectValue: false,
                incDisabled: false,
                setDisable: false,
            })
        }
    }

    const setSettings = () => {
        setState({
            ...state,
            currentValueCounter: state.startValue,
            incorrectValue: false,
            incDisabled: false,
            blockOfScreen: false,
            resetDisable: true,
            setDisable: true,
        })
    }

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        const startValueAsString = localStorage.getItem('startValue')

        if (maxValueAsString && startValueAsString) {
            const newMaxValue = JSON.parse(maxValueAsString)
            const newStartValue = JSON.parse(startValueAsString)

            setState({
                ...state,
                maxValue: newMaxValue,
                startValue: newStartValue,
                currentValueCounter: newStartValue,
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
    }, [state.maxValue, state.startValue])

    return (
        <div className={style.wrapper}>
            <Settings startValue={state.startValue}
                      maxValue={state.maxValue}
                      incorrectValue={state.incorrectValue}
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      setSettings={setSettings}
                      setDisable={state.setDisable}/>
            <Counter currentValue={state.currentValueCounter}
                     maxValue={state.maxValue}
                     incorrectValue={state.incorrectValue}
                     incDisabled={state.incDisabled}
                     blockOfScreen={state.blockOfScreen}
                     titlesScreen={state.titlesScreen}
                     increase={increase}
                     reset={reset}
                     resetDisable={state.resetDisable}/>
        </div>
    )

}