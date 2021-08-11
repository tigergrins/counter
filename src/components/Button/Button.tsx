import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    titleOfButton: string
    incorrectValue: boolean
    disabled?: boolean
    callback: () => void
}

export function Button(props: ButtonPropsType) {
    const buttonDisabled = props.incorrectValue || props.disabled

    const buttonClassName = `${styles.button} ${props.incorrectValue || props.disabled ? styles.disabled : ''}`

    return (
        <button onClick={props.callback}
                disabled={buttonDisabled}
                className={buttonClassName}>{props.titleOfButton}</button>
    )
}