export type myPostDataType = {
    id: number
    likesCount: number
    message: string
}
export type dialogsMessagesDataType = {
    id: number
    message: string
}
export type dialogsType = {
    id: number
    name: string
}


export type ProfilePageType = {
    myPostData: myPostDataType[]

}

export type messagesPageType = {
    dialogs: dialogsType[]
    dialogsMessagesData: dialogsMessagesDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: messagesPageType
}

export const State: StateType = {
    profilePage: {
        myPostData: [
            { id: 1, likesCount: 2, message: 'its test message ' },
            { id: 2, likesCount: 5, message: 'try props ' },
            { id: 3, likesCount: 1, message: 'its worked ' },
            { id: 4, likesCount: 12, message: 'yo ' }
        ]
    },
    messagesPage: {
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
    },

}


export const addPost = (messagePost: string) => {
    const newPost = {
        id: 5,
        likesCount: 0,
        message: messagePost
    }
    State.profilePage.myPostData.push(newPost)
}