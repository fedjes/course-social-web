


import React from 'react'
import { UsersType, usersTypeWithLocation } from "./state"
import { Dispatch } from 'redux'
import { userApi } from '../api/api'

// const url ="../../../../thumb-1983.jpg"

const initialStateProfile: UsersType = {
    users: [],
    pageSize: 10,
    userCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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

export type ActionUsersType = FollowACType
    | UnfolowACType
    | SetMoreUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | SetFetchingToogleType
    | SetFollowingProgressType

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
        case "TOOGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgress: action.payload.isFollowing
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(el => el !== action.payload.userId)
            }
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

export const toogleIsFollowingProgressAC = (userId: number, isFollowing: boolean) => {
    return {
        type: "TOOGLE-IS-FOLLOWING-PROGRESS" as const,
        payload: {
            isFollowing,
            userId
        }
    }
}
type SetFollowingProgressType = ReturnType<typeof toogleIsFollowingProgressAC>

//thunk
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toogleFetchingAC(true))
    userApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toogleFetchingAC(false))
            dispatch(setMoreUsersAC(data.items))
            dispatch(setUsersCountAC(data.totalCount))
        })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFollowingProgressAC(userId, true))
    userApi.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(folowAC(userId))
            }
            dispatch(toogleIsFollowingProgressAC(userId, false))
            // dispatch(toogleFetchingAC(true))
        })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFollowingProgressAC(userId, true))
    userApi.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfolowAC(userId))
            }
            dispatch(toogleIsFollowingProgressAC(userId, false))
            // dispatch(toogleFetchingAC(true))
        })
}