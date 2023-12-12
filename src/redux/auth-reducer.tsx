


import React from 'react'
import { UsersType, usersTypeWithLocation } from "./state"
import { Dispatch } from 'redux';
import { authApi } from '../api/api';
import { AppThunk } from './redux-store';
import { LoginType } from '../layout/components/Login/Login';

// const url ="../../../../thumb-1983.jpg"
export type ResponseAuthType = {
    data: AuthPropsType
    resultCode: number
    messages: string[]
}




export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialStateAuth: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type ActionAuthType = SetUserData | OutLoginType

export const authReducer = (state = initialStateAuth, action: ActionAuthType): AuthPropsType => {
    switch (action.type) {
        case 'SET-USER-DATA': {

            return {
                ...state,
                id: action.payload.data.id,
                login: action.payload.data.login,
                email: action.payload.data.email,
                isAuth: true
            }
        }
        case 'LOG-OUT': {

            return {
                ...state,
                id: action.payload.data.id,
                login: action.payload.data.login,
                email: action.payload.data.email,
                isAuth: false
            }
        }


        default: return state
    }

}

export const setAuthUserDataAC = (data: AuthPropsType) => {
    return {
        type: "SET-USER-DATA" as const,
        payload: {
            data
        }
    }
    
}
type SetUserData = ReturnType<typeof setAuthUserDataAC>


export const getAuthUserDataTC = () => (dispatch: Dispatch) => {

    authApi.getMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.data))
            }
        })
}

export const LoginAuthTC = (data: LoginType): AppThunk => (dispatch) => {
    authApi.loginAuth(data)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC());
                dispatch(setAuthUserDataAC(response.data.data))
            }
        })
}



export const LogOutAC = (data: AuthPropsType) => {
    return {
        type: 'LOG-OUT',
        payload: {
            data
        }
    }
}

export const LogOutTC = (): AppThunk => (dispatch) => {
    authApi.logOut()
        .then(response => {
            console.log(response);
            if(response.data.resultCode === 0) {
                dispatch(LogOutAC(response.data.data))
            }
        })
}
type OutLoginType = ReturnType<typeof LogOutAC>