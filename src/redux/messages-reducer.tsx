import { MessagesPageType } from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE';

export const messagesReducer = (state: MessagesPageType, action:any) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessage;
            return state;
        }
        case SEND_MESSAGE: {
            const newText = state.newMessageText;
            state.newMessageText = '';
            state.dialogsMessagesData.push({ id: 6, message: newText })
            return state;
        }
        default: return state;
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageAC = (textFromTexAreaMessagePage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: textFromTexAreaMessagePage
    }
}