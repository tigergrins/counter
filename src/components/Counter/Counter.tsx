import React from 'react';
import {Button} from '../Button/Button';
import style from './Counter.module.css';
import {AppDispatchType} from '../../redux/redux-store';
import {DisableType, increaseAC, resetAC, ValuesType} from '../../redux/counter-reducer';

type CounterPropsType = {
    dispatch: AppDispatchType
    values: ValuesType
    disable: DisableType
    titles: string[]
}

export function Counter(props: CounterPropsType) {
    const screenValue = () => {
        if (props.disable.incorrectValue) {
            return props.titles[1]
        } else if (props.disable.blockOfScreen) {
            return props.titles[0]
        } else {
            return props.values.currentValueCounter
        }
    }

    const increaseByOne = () => props.dispatch(increaseAC())
    const resetCounter = () => props.dispatch(resetAC())

    const classNameValue = `${style.number} ${props.disable.blockOfScreen || props.disable.incorrectValue ? style.title : ''}`
    const classNameRed = props.disable.incDisabled || props.disable.incorrectValue ? style.red : ''
    const disabled = props.disable.incDisabled || props.disable.blockOfScreen

    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <div className={classNameValue}>
                    <span className={classNameRed}>{screenValue()}</span>
                </div>
            </div>
            <div className={style.buttons}>

                <Button titleOfButton={'inc'}
                        incorrectValue={props.disable.incorrectValue}
                        disabled={disabled}
                        callback={increaseByOne}/>
                <Button titleOfButton={'reset'}
                        incorrectValue={props.disable.incorrectValue}
                        disabled={props.disable.blockOfScreen || props.disable.resetDisable}
                        callback={resetCounter}/>
            </div>
        </div>
    )
}