


import React from 'react'
import { UsersType, usersTypeWithLocation } from "./state"

// const url ="../../../../thumb-1983.jpg"

const initialStateProfile: UsersType = {
    users: [],
    pageSize: 10,
    userCount: 0,
    currentPage: 1,
    isFetching: false,
    // [
    //     { id: 1, photoUrl: url, folowed: false, fullName: 'fedjes kat', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
    //     { id: 2, photoUrl: url, folowed: false, fullName: 'felis h', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
    //     { id: 3, photoUrl: url, folowed: false, fullName: 'merlo r', status: 'its test status ', location: { city: 'moscow', country: 'russia' } },
    //     { id: 4, photoUrl: url, folowed: false, fullName: 'it inc', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
    //     {
    //         id: 5,
    //         photoUrl: url,
    //         folowed: false, 
    //         fullName: 'den denielse', 
    //         status: 'its test status ', 
    //         location: { city: 'kiev', country: 'ukraine' }
    //     },
    // ]
}

export type ActionUsersType = FollowACType | UnfolowACType | SetMoreUsersType | SetCurrentPageType | SetTotalCountType | SetFetchingToogleType

export const usersReducer = (state = initialStateProfile, action: ActionUsersType): UsersType => {
    switch (action.type) {
        case "FOLOW-USER": {
            return { ...state, users: state.users.map(el => el.id === action.payload.userId ? { ...el, followed: true } : el) }
        }
        case "UNFOLOW-USER": {
            return { ...state, users: state.users.map(el => el.id === action.payload.userId ? { ...el, followed: false } : el) }
        }
        case "SET-MORE-USERS": {
            return { ...state, users: action.payload.users }
        }
        case "SET-CURRENT-PAGE": {
            return { ...state, currentPage: action.payload.currentPage }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return { ...state, userCount: action.payload.totalCount }
        }
        case "TOOGLE-ISFETHCING": {
            return { ...state, isFetching: action.payload.isFetching }
        }
        default: return state
    }

}

export const folowAC = (userId: number) => {
    return {
        type: "FOLOW-USER" as const,
        payload: {
            userId
        }
    }
}
type FollowACType = ReturnType<typeof folowAC>


export const unfolowAC = (userId: number) => {
    return {
        type: "UNFOLOW-USER" as const,
        payload: {
            userId
        }
    }
}
type UnfolowACType = ReturnType<typeof unfolowAC>


export const setMoreUsersAC = (users: usersTypeWithLocation[]) => {
    return {
        type: "SET-MORE-USERS" as const,
        payload: {
            users
        }
    }
}
type SetMoreUsersType = ReturnType<typeof setMoreUsersAC>


export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE" as const,
        payload: {
            currentPage
        }
    }
}
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>

export const setUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT" as const,
        payload: {
            totalCount
        }
    }
}
type SetTotalCountType = ReturnType<typeof setUsersCountAC>

export const toogleFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOOGLE-ISFETHCING" as const,
        payload: {
            isFetching
        }
    }
}
type SetFetchingToogleType = ReturnType<typeof toogleFetchingAC>