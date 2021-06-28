import React from 'react';
import style from './Settings.module.css';
import {Button} from '../Button/Button';

export function Settings() {

    return (
        <div className={style.wrapper}>
            <div className={style.screen}>
                <div className={style.input}><span className={style.title}>max value</span><input className={style.numbers} type="number"/></div>
                <div className={style.input}><span className={style.title}>start value</span><input className={style.numbers}  type="number"/></div>
            </div>
            <div className={style.buttons}>
                <Button titleOfButton={'set'} callback={() => alert('set')} />
            </div>
        </div>
    )
}
