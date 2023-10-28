import { combineReducers, legacy_createStore } from 'redux'
import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';


const RootReducer = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer
})
export const store = legacy_createStore(RootReducer);

export type RootStateType = ReturnType<typeof RootReducer>