import React from 'react';
import { Button } from '../Button/Button';
import style from './Counter.module.css';


type CounterPropsType = {
    numbers: number
    maxValue: number
    plusOne: () => void
    reset: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <div className={style.number}><span className={props.numbers === props.maxValue ? 'red' : ''}>{props.numbers}</span></div>
            </div>
            <div className={style.buttons}>

                <Button titleOfButton={'inc'}
                        callback={props.plusOne}/>
                <Button titleOfButton={'reset'}
                        callback={props.reset}/>


                {/*<button disabled={numbers === 5} onClick={plusOne} className={'button'}>inc</button>*/}
                {/*<button disabled={numbers === 0} onClick={reset} className={'button'}>reset</button>*/}
            </div>
        </div>
    )
}