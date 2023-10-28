import { ProfilePageType } from "./state";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const initialStateProfile: ProfilePageType = {
    myPostData: [
        { id: 1, likesCount: 2, message: 'its test message ' },
        { id: 2, likesCount: 5, message: 'try props ' },
        { id: 3, likesCount: 1, message: 'its worked ' },
        { id: 4, likesCount: 12, message: 'yo ' }
    ],
    newPostText: 'test string'
}

export type ActionProfileType = changeTextAreaACType | AddPostACType

export const profileReducer = (state = initialStateProfile, action: ActionProfileType):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: 6,
                likesCount: 0,
                message: state.newPostText
            }
            state.myPostData.push(newPost);
            state.newPostText = '';
            return state
        }
        case "UPDATE-NEW-POST": {
            state.newPostText = action.textFromTexArea;
            return state
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