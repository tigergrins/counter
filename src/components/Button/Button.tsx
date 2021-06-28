import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    titleOfButton: string
    callback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.callback} className={styles.button}>{props.titleOfButton}</button>
    )
}