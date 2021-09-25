import React, {useCallback} from 'react';
import style from './Settings.module.css';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import {AppDispatchType} from '../../redux/redux-store';
import {
    changeMaxValueAC,
    changeStartValueAC,
    DisableType,
    setSettingsAC,
    ValuesType
} from '../../redux/counter-reducer';

type SettingsPropsType = {
    dispatch: AppDispatchType
    values: ValuesType
    disable: DisableType
}

export const Settings = (props: SettingsPropsType) => {
    const changeStartValueCounter = useCallback((value: number) => props.dispatch(changeStartValueAC(value)), [props.dispatch])
    const changeMaxValueCounter = useCallback((value: number) => props.dispatch(changeMaxValueAC(value)), [props.dispatch])
    const setSettingsCounter = useCallback(() => props.dispatch(setSettingsAC()), [props.dispatch])


    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <Input title={'max value'}
                       value={props.values.maxValue}
                       error={props.disable.incorrectValue}
                       callback={changeMaxValueCounter}/>
                <Input title={'start value'}
                       value={props.values.startValue}
                       error={props.disable.incorrectValue}
                       callback={changeStartValueCounter}/>
            </div>
            <div className={style.buttons}>
                <Button titleOfButton={'set'}
                        incorrectValue={props.disable.incorrectValue}
                        callback={setSettingsCounter}
                        disabled={props.disable.setDisable}/>
            </div>
        </div>
    )
}
