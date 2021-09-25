import React, {ChangeEvent} from 'react';
import style from './Input.module.css';

type InputPropsType = {
    title: string
    value: number
    error: boolean
    callback: (value: number) => void
}

export const Input = React.memo((props: InputPropsType) => {
    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
    }

    return (
        <div className={style.item}>
            <span className={style.title}>{props.title}</span>
            <input value={props.value}
                   className={`${style.input} ${props.error ? style.error : ' '}`}
                   type="number"
                   onChange={onchangeInputHandler}
            />
        </div>
    )
})
