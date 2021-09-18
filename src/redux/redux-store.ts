import {combineReducers, createStore, Store} from 'redux'
import {counterReducer} from './counter-reducer'
import {loadState, saveState} from '../utils/localstorage-utils';

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof RootReducer>
export type AppDispatchType = typeof store.dispatch

let RootReducer = combineReducers({
    counter: counterReducer,
})

export const store: Store = createStore(RootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})