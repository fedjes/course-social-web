import { ProfilePageType } from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

export const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 6,
                likesCount: 0,
                message: state.newPostText
            }
            state.myPostData.push(newPost);
            state.newPostText = '';
            return state
        }
        case UPDATE_NEW_POST: {
            state.newPostText = action.textFromTexArea;
            return state
        }
        default: return state
    }

}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export const onChangeTextAreaAC = (textFromTexArea: string) => {
    return {
        type: UPDATE_NEW_POST,
        textFromTexArea: textFromTexArea
    }
}