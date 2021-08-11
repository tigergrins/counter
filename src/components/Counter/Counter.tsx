import React, {useState} from 'react';
import {Button} from '../Button/Button';
import style from './Counter.module.css';
import {titleScreenType} from '../../App';

type CounterPropsType = {
    currentValue: number
    maxValue: number
    incorrectValue: boolean
    incDisabled: boolean
    blockOfScreen: boolean
    titlesScreen: Array<titleScreenType>
    increase: () => void
    reset: () => void
}

export function Counter(props: CounterPropsType) {
    const screenValue = () => {
        if (props.incorrectValue) {
            return props.titlesScreen[1]
        } else if (props.blockOfScreen) {
            return props.titlesScreen[0]
        } else {
            return props.currentValue
        }
    }

    const classNameValue = `${style.number} ${props.blockOfScreen || props.incorrectValue ? style.title : ''}`
    const classNameRed = props.incDisabled || props.incorrectValue ? style.red : ''
    const disabled = props.incDisabled || props.blockOfScreen

    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <div className={classNameValue}>
                    <span className={classNameRed}>{screenValue()}</span>
                </div>
            </div>
            <div className={style.buttons}>

                <Button titleOfButton={'inc'}
                        incorrectValue={props.incorrectValue}
                        disabled={disabled}
                        callback={props.increase}/>
                <Button titleOfButton={'reset'}
                        incorrectValue={props.incorrectValue}
                        disabled={props.blockOfScreen}
                        callback={props.reset}/>
            </div>
        </div>
    )
}