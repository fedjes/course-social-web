import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';

import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const RootReducer = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export const store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof RootReducer>


// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof RootReducer>
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector



export type StoreDispatch = typeof store.dispatch
//@ts-ignore
window.store = store