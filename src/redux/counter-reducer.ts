type CounterActionType = ReturnType<typeof increaseAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof setSettingsAC>

export type ValuesType = {
    startValue: number
    maxValue: number
    currentValueCounter: number
}

export type DisableType = {
    incDisabled: boolean
    blockOfScreen: boolean
    resetDisable: boolean
    setDisable: boolean
    incorrectValue: boolean
}

export type InitType = {
    values: ValuesType
    disable: DisableType
    titles: string[]
}

const InitialState = {
    values: {
        startValue: 0,
        maxValue: 5,
        currentValueCounter: 0,
    },
    disable: {
        incDisabled: false,
        blockOfScreen: false,
        resetDisable: true,
        setDisable: true,
        incorrectValue: false,
    },
    titles: ['enter values and press \'set\'', 'Incorrect value!'],
}

export const counterReducer = (state: InitType = InitialState, action: CounterActionType): InitType => {
    switch (action.type) {
        case 'INCREASE-ONE': {
            return (state.values.currentValueCounter + 1) === state.values.maxValue
                ? {
                    ...state,
                    values: {
                        ...state.values,
                        currentValueCounter: state.values.currentValueCounter + 1,
                    },
                    disable: {
                        ...state.disable,
                        incDisabled: true,
                        resetDisable: false,
                    }
                }
                : {
                    ...state,
                    values: {
                        ...state.values,
                        currentValueCounter: state.values.currentValueCounter + 1,
                    },
                    disable: {
                        ...state.disable,
                        resetDisable: false,
                    },
                }
        }
        case 'RESET': {
            return {
                ...state,
                values: {
                    ...state.values,
                    currentValueCounter: state.values.startValue,
                },
                disable: {
                    ...state.disable,
                    incDisabled: false,
                    resetDisable: true,
                },
            }
        }
        case 'CHANGE-START-VALUE': {
            return action.value < 0 || action.value >= state.values.maxValue
                ? {
                    ...state,
                    values: {
                        ...state.values,
                        startValue: action.value
                    },
                    disable: {
                        ...state.disable,
                        incorrectValue: true,
                    }
                }
                : {
                    ...state,
                    values: {
                        ...state.values,
                        startValue: action.value
                    },
                    disable: {
                        ...state.disable,
                        blockOfScreen: true,
                        incorrectValue: false,
                        incDisabled: false,
                        setDisable: false,
                    }
                }
        }
        case 'CHANGE-MAX-VALUE': {
            return action.value < 0 || action.value <= state.values.startValue
                ? {
                    ...state,
                    values: {
                        ...state.values,
                        maxValue: action.value
                    },
                    disable: {
                        ...state.disable,
                        incorrectValue: true,
                    }
                }
                : {
                    ...state,
                    values: {
                        ...state.values,
                        maxValue: action.value
                    },
                    disable: {
                        ...state.disable,
                        blockOfScreen: true,
                        incorrectValue: false,
                        incDisabled: false,
                        setDisable: false,
                    }
                }
        }
        case 'SET-SETTINGS': {
            return {
                ...state,
                values: {
                    ...state.values,
                    currentValueCounter: state.values.startValue,
                },
                disable: {
                    ...state.disable,
                    blockOfScreen: false,
                    incorrectValue: false,
                    incDisabled: false,
                    setDisable: true,
                    resetDisable: true,
                },
            }
        }
        default:
            return state
    }
}

export const increaseAC = () => ({type: 'INCREASE-ONE'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const changeStartValueAC = (value: number) => ({type: 'CHANGE-START-VALUE', value} as const)
export const changeMaxValueAC = (value: number) => ({type: 'CHANGE-MAX-VALUE', value} as const)
export const setSettingsAC = () => ({type: 'SET-SETTINGS'} as const)