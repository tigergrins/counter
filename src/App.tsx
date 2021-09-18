import React from 'react';
import style from './App.module.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export function App() {
    return (
        <div className={style.wrapper}>
            <Counter />
            <Settings />
        </div>
    )

}