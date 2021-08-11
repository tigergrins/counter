import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

export type titleScreenType = 'enter values and press \'set\'' | 'Incorrect value!'

type StateType = {
    startValue: number
    tempStartValue: number
    maxValue: number
    tempMaxValue: number
    currentValueCounter: number
    incorrectValue: boolean
    incDisabled: boolean
    titlesScreen: Array<titleScreenType>
    blockOfScreen: boolean
}

export function AppV2() {
    const [state, setState] = useState<StateType>(
        {
            startValue: 0,
            tempStartValue: 0,
            maxValue: 5,
            tempMaxValue: 5,
            currentValueCounter: 0,
            incorrectValue: false,
            incDisabled: false,
            titlesScreen: ['enter values and press \'set\'', 'Incorrect value!'],
            blockOfScreen: false,
        })

    const increase = () => {
        if (state.currentValueCounter < state.maxValue) {
            setState(() => ({
                    ...state,
                    currentValueCounter: state.currentValueCounter + 1,
                })
            )
        }

        if ((state.currentValueCounter + 1) === state.maxValue) {
            setState({
                ...state,
                currentValueCounter: state.currentValueCounter + 1,
                incDisabled: true,
            })
        }
    }
    const reset = () => {
        setState({
            ...state,
            currentValueCounter: state.startValue,
            incDisabled: false,
        })
    }
    const changeStartValue = (value: number) => {
        if (value < 0 || value >= state.tempMaxValue) {
            setState({
                ...state,
                tempStartValue: value,
                incorrectValue: true,
            })
        } else {
            setState({
                ...state,
                tempStartValue: value,
                blockOfScreen: true,
                incorrectValue: false,
            })
        }
    }
    console.log(state.startValue)
    const changeMaxValue = (value: number) => {
        console.log(state.startValue)
        if (value < 0 || value <= state.tempStartValue) {
            setState({
                ...state,
                tempMaxValue: value,
                incorrectValue: true,
            })
        } else {
            setState({
                ...state,
                tempMaxValue: value,
                blockOfScreen: true,
                incorrectValue: false,
            })
        }
    }
    const setSettings = () => {
        setState({
            ...state,
            startValue: state.tempStartValue,
            maxValue: state.tempMaxValue,
            currentValueCounter: state.tempStartValue,
            blockOfScreen: false,
        })
    }

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            const newMaxValue = JSON.parse(maxValueAsString)
            setState({
                ...state,
                maxValue: newMaxValue
            })
        }

        const startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            const newStartValue = JSON.parse(startValueAsString)
            setState({
                ...state,
                startValue: newStartValue
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
    }, [state.startValue, state.maxValue])

    return (
        <BrowserRouter>
            <div className={style.wrapper}>
                <Route path={'/counter'} render={() => <Counter currentValue={state.currentValueCounter}
                                                                maxValue={state.maxValue}
                                                                incorrectValue={state.incorrectValue}
                                                                incDisabled={state.incDisabled}
                                                                blockOfScreen={state.blockOfScreen}
                                                                titlesScreen={state.titlesScreen}
                                                                increase={increase}
                                                                reset={reset}/>}/>
                <Route path={'/settings'} component={() => <Settings tempStartValue={state.tempStartValue}
                                                                     tempMaxValue={state.tempMaxValue}
                                                                     incorrectValue={state.incorrectValue}
                                                                     changeStartValue={changeStartValue}
                                                                     changeMaxValue={changeMaxValue}
                                                                     setSettings={setSettings}/>}/>

            </div>
        </BrowserRouter>

    )

}