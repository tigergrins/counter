import React from 'react';
import style from './Settings.module.css';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

type SettingsPropsType = {
    tempStartValue: number
    tempMaxValue: number
    incorrectValue: boolean
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    setSettings: () => void
}

export function Settings(props: SettingsPropsType) {


    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <Input title={'max value'}
                       value={props.tempMaxValue}
                       error={props.incorrectValue}
                       setTempValue={props.changeMaxValue}/>
                <Input title={'start value'}
                       value={props.tempStartValue}
                       error={props.incorrectValue}
                       setTempValue={props.changeStartValue}/>
            </div>
            <div className={style.buttons}>
                <Button titleOfButton={'set'}
                        incorrectValue={props.incorrectValue}
                        callback={props.setSettings}/>
            </div>
        </div>
    )
}
