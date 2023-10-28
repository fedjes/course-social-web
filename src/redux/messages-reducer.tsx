// import { MessagesPageType } from "./state";

import { MessagesPageType } from "./state";

// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// const SEND_MESSAGE = 'SEND-MESSAGE';


const initialStateMessage:MessagesPageType = {
    dialogs: [
        { id: 1, name: 'felis' },
        { id: 2, name: 'test' },
        { id: 3, name: 'fedjes' },
        { id: 4, name: 'moreUser' },
    ],
    dialogsMessagesData: [
        { id: 1, message: 'test' },
        { id: 2, message: 'test test' },
        { id: 3, message: 'test test test' },
        { id: 4, message: 'yo' },
    ],
    newMessageText: 'its test message'
}

export type ActionMessageType = SendMessageACType | UpdateMessageACType

export const messagesReducer = (state = initialStateMessage , action:ActionMessageType):MessagesPageType => {
    switch(action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newMessage;
            return state;
        }
        case 'SEND-MESSAGE': {
            const newText = state.newMessageText;
            state.newMessageText = '';
            state.dialogsMessagesData.push({ id: 6, message: newText })
            return state;
        }
        default: return state;
    }
}
type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE' as const
    }
}
type UpdateMessageACType = ReturnType<typeof updateNewMessageAC>
export const updateNewMessageAC = (textFromTexAreaMessagePage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT" as const,
        newMessage: textFromTexAreaMessagePage
    }
}