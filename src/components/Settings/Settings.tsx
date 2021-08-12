import React from 'react';
import style from './Settings.module.css';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    incorrectValue: boolean
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    setSettings: () => void
    setDisable: boolean
}

export function Settings(props: SettingsPropsType) {


    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <Input title={'max value'}
                       value={props.maxValue}
                       error={props.incorrectValue}
                       setTempValue={props.changeMaxValue}/>
                <Input title={'start value'}
                       value={props.startValue}
                       error={props.incorrectValue}
                       setTempValue={props.changeStartValue}/>
            </div>
            <div className={style.buttons}>
                <Button titleOfButton={'set'}
                        incorrectValue={props.incorrectValue}
                        callback={props.setSettings}
                        disabled={props.setDisable}/>
            </div>
        </div>
    )
}
