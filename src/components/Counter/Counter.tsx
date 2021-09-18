import React from 'react';
import {Button} from '../Button/Button';
import style from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DisableType, increaseAC, resetAC, ValuesType} from '../../redux/counter-reducer';

type CounterPropsType = {}

export function Counter(props: CounterPropsType) {
    const dispatch = useDispatch()
    const values = useSelector<AppStateType, ValuesType>(state => state.counter.values)
    const disable = useSelector<AppStateType, DisableType>(state => state.counter.disable)
    const titles = useSelector<AppStateType, string[]>(state => state.counter.titles)


    const screenValue = () => {
        if (disable.incorrectValue) {
            return titles[1]
        } else if (disable.blockOfScreen) {
            return titles[0]
        } else {
            return values.currentValueCounter
        }
    }

    const increaseByOne = () => dispatch(increaseAC())
    const resetCounter = () => dispatch(resetAC())

    const classNameValue = `${style.number} ${disable.blockOfScreen || disable.incorrectValue ? style.title : ''}`
    const classNameRed = disable.incDisabled || disable.incorrectValue ? style.red : ''
    const disabled = disable.incDisabled || disable.blockOfScreen

    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <div className={classNameValue}>
                    <span className={classNameRed}>{screenValue()}</span>
                </div>
            </div>
            <div className={style.buttons}>

                <Button titleOfButton={'inc'}
                        incorrectValue={disable.incorrectValue}
                        disabled={disabled}
                        callback={increaseByOne}/>
                <Button titleOfButton={'reset'}
                        incorrectValue={disable.incorrectValue}
                        disabled={disable.blockOfScreen || disable.resetDisable}
                        callback={resetCounter}/>
            </div>
        </div>
    )
}