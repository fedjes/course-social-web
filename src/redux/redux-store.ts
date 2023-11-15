import { combineReducers, legacy_createStore } from 'redux'
import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';


const RootReducer = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})
export const store = legacy_createStore(RootReducer);

export type RootStateType = ReturnType<typeof RootReducer>

export type StoreDispatch = typeof store.dispatch