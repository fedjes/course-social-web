import { profileApi, userApi } from "../api/api";
import { GetProfileType } from "../layout/components/Profile/ProfileContainer";
import { ProfilePageType } from "./state";
import { Dispatch } from 'redux';

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const initialStateProfile: ProfilePageType = {
    myPostData: [
        { id: 1, likesCount: 2, message: 'its test message ' },
        { id: 2, likesCount: 5, message: 'try props ' },
        { id: 3, likesCount: 1, message: 'its worked ' },
        { id: 4, likesCount: 12, message: 'yo ' }
    ],
    newPostText: 'test string',
    profile: null,
    status: ''
}

export type ActionProfileType = changeTextAreaACType | AddPostACType | setUserProfileACType | setStatusACType

export const profileReducer = (state = initialStateProfile, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: 6,
                likesCount: 0,
                message: state.newPostText
            }
            return {
                ...state,
                myPostData: [...state.myPostData, newPost],
                newPostText: ''
            };

        }
        case "UPDATE-NEW-POST": {
            return { ...state, newPostText: action.textFromTexArea };

        }
        case "SET-STATUS": {
            return { ...state, status: action.status };

        }
        case "SET-USER-PROFILE": {
            return { ...state, profile: action.profile };

        }
        default: return state
    }

}

export const addPostAC = () => {
    return {
        type: "ADD-POST" as const
    }
}

type AddPostACType = ReturnType<typeof addPostAC>

export const onChangeTextAreaAC = (textFromTexArea: string) => {
    return {
        type: "UPDATE-NEW-POST" as const,
        textFromTexArea: textFromTexArea
    }
}
type changeTextAreaACType = ReturnType<typeof onChangeTextAreaAC>
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS" as const,
        status: status
    }
}
type setStatusACType = ReturnType<typeof setStatusAC>




export const setUsersProfileAC = (profile: GetProfileType) => {
    return {
        type: "SET-USER-PROFILE" as const,
        profile
    }
}
type setUserProfileACType = ReturnType<typeof setUsersProfileAC>


export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    userApi.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfileAC(response.data))
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStstus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                console.log(response);
                dispatch(setStatusAC(status))
            }
        })
}