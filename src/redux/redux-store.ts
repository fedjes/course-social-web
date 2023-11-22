import { combineReducers, legacy_createStore } from 'redux'
import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';


const RootReducer = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export const store = legacy_createStore(RootReducer);



export type RootStateType = ReturnType<typeof RootReducer>

export type StoreDispatch = typeof store.dispatch
//@ts-ignore
window.store = store