import React from 'react';
import style from './App.module.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import {DisableType, ValuesType} from './redux/counter-reducer';

export function App() {
    const dispatch = useDispatch()
    const values = useSelector<AppStateType, ValuesType>(state => state.counter.values)
    const disable = useSelector<AppStateType, DisableType>(state => state.counter.disable)
    const titles = useSelector<AppStateType, string[]>(state => state.counter.titles)

    return (
        <div className={style.wrapper}>
            <Counter dispatch={dispatch} values={values} disable={disable} titles={titles}/>
            <Settings dispatch={dispatch} values={values} disable={disable}/>
        </div>
    )

}