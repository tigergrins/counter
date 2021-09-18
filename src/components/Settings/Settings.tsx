import React from 'react';
import style from './Settings.module.css';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {changeMaxValueAC, changeStartValueAC, DisableType, setSettingsAC, ValuesType} from '../../redux/counter-reducer';

type SettingsPropsType = {}

export function Settings(props: SettingsPropsType) {
    const dispatch = useDispatch()
    const values = useSelector<AppStateType, ValuesType>(state => state.counter.values)
    const disable = useSelector<AppStateType, DisableType>(state => state.counter.disable)

    const changeStartValueCounter = (value: number) => dispatch(changeStartValueAC(value))
    const changeMaxValueCounter = (value: number) => dispatch(changeMaxValueAC(value))
    const setSettingsCounter = () => dispatch(setSettingsAC())


    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <Input title={'max value'}
                       value={values.maxValue}
                       error={disable.incorrectValue}
                       callback={changeMaxValueCounter}/>
                <Input title={'start value'}
                       value={values.startValue}
                       error={disable.incorrectValue}
                       callback={changeStartValueCounter}/>
            </div>
            <div className={style.buttons}>
                <Button titleOfButton={'set'}
                        incorrectValue={disable.incorrectValue}
                        callback={setSettingsCounter}
                        disabled={disable.setDisable}/>
            </div>
        </div>
    )
}
