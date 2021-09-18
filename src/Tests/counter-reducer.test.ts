import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    increaseAC,
    InitType,
    resetAC,
    setSettingsAC
} from '../redux/counter-reducer'

let startState: InitType = {
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

test('counter reducer should increase only by one', () => {
    const endState = counterReducer(startState, increaseAC())

    expect(endState.values.currentValueCounter).toBe(1)
    expect(endState.disable.resetDisable).toBe(false)
    expect(startState.values.currentValueCounter).toBe(0)
})

test('counter reducer should reset the data correctly', () => {
    const changedState = counterReducer(startState, increaseAC())
    const endState = counterReducer(changedState, resetAC())

    expect(changedState.values.currentValueCounter).toBe(1)
    expect(changedState.disable.resetDisable).toBe(true)
    expect(endState.values.currentValueCounter).toBe(0)
    expect(endState.disable.resetDisable).toBe(false)
})

test('counter reducer should change the start value correctly', () => {
    const endState1 = counterReducer(startState, changeStartValueAC(3))

    expect(endState1.values.startValue).toBe(3)
    expect(endState1.values.maxValue).toBe(5)
    expect(endState1.disable.blockOfScreen).toBe(true)
    expect(endState1.disable.incorrectValue).toBe(false)
    expect(endState1.disable.incDisabled).toBe(false)
    expect(endState1.disable.setDisable).toBe(false)

    const endState2 = counterReducer(startState, changeStartValueAC(5))

    expect(endState2.values.startValue).toBe(5)
    expect(endState2.values.maxValue).toBe(5)
    expect(endState2.disable.incorrectValue).toBe(true)

})

test('counter reducer should change the max value correctly', () => {
    const endState1 = counterReducer(startState, changeMaxValueAC(10))

    expect(endState1.values.startValue).toBe(0)
    expect(endState1.values.maxValue).toBe(10)
    expect(endState1.disable.blockOfScreen).toBe(true)
    expect(endState1.disable.incorrectValue).toBe(false)
    expect(endState1.disable.incDisabled).toBe(false)
    expect(endState1.disable.setDisable).toBe(false)

    const endState2 = counterReducer(startState, changeMaxValueAC(0))

    expect(endState2.values.startValue).toBe(0)
    expect(endState2.values.maxValue).toBe(0)
    expect(endState2.disable.incorrectValue).toBe(true)

})

test('counter reducer should set the settings correctly', () => {
    const changedState = counterReducer(startState, increaseAC())
        const endState = counterReducer(changedState, setSettingsAC())

    expect(endState.values.currentValueCounter).toBe(endState.values.startValue)
    expect(changedState.values.startValue).toBe(0)
    expect(changedState.values.maxValue).toBe(5)
    expect(endState.disable.blockOfScreen).toBe(false)
    expect(endState.disable.incorrectValue).toBe(false)
    expect(endState.disable.incDisabled).toBe(false)
    expect(endState.disable.setDisable).toBe(true)
    expect(endState.disable.resetDisable).toBe(true)
})
