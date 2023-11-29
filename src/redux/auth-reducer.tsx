


import React from 'react'
import { UsersType, usersTypeWithLocation } from "./state"
import { Dispatch } from 'redux';
import { authApi } from '../api/api';

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

export type ActionAuthType = SetUserData

export const authReducer = (state = initialStateAuth, action: ActionAuthType):AuthPropsType => {
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


        default: return state
    }

}

export const setAuthUserDataAC = (data:AuthPropsType) => {
    return {
        type: "SET-USER-DATA" as const,
        payload: {
           data
        }
    }
}
type SetUserData = ReturnType<typeof setAuthUserDataAC>


export const getAuthUserDataTC = () => (dispatch:Dispatch) => {
    
    authApi.getMe()
    .then(response => {
       if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(response.data.data))
    }
    })
}

