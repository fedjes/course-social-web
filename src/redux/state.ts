// import { State, addPost, updateNewPost } from './state';
// let rerenderEntireTree = () => {
//     console.log('state changed');
    
// }


export type MyPostDataType = {
    id: number
    likesCount: number
    message: string
}
export type DialogsMessagesDataType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    myPostData: MyPostDataType[]
    newPostText: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    dialogsMessagesData: DialogsMessagesDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

// export const State: StateType = {
//     profilePage: {
//         myPostData: [
//             { id: 1, likesCount: 2, message: 'its test message ' },
//             { id: 2, likesCount: 5, message: 'try props ' },
//             { id: 3, likesCount: 1, message: 'its worked ' },
//             { id: 4, likesCount: 12, message: 'yo ' }
//         ],
//         newPostText: 'test string'
//     },
//     messagesPage: {
//         dialogs: [
//             { id: 1, name: 'felis' },
//             { id: 2, name: 'test' },
//             { id: 3, name: 'fedjes' },
//             { id: 4, name: 'moreUser' },
//         ],
//         dialogsMessagesData: [
//             { id: 1, message: 'test' },
//             { id: 2, message: 'test test' },
//             { id: 3, message: 'test test test' },
//             { id: 4, message: 'yo' },
//         ],
//     },

// }


// export const addPost = () => {
//     const newPost = {
//         id: 6,
//         likesCount: 0,
//         message: State.profilePage.newPostText
//     }
//     State.profilePage.myPostData.push(newPost);
//     rerenderEntireTree();
//     State.profilePage.newPostText = '';
// }
// export const updateNewPost = (newPostText: string) => {
//     State.profilePage.newPostText = newPostText;
//     rerenderEntireTree()
// }

// export const subscribe = (observer:()=>void) => {
//     rerenderEntireTree = observer;
// }
export type StoreType = {
    _State: StateType
    getState: ()=> StateType
    _callSubscriber: ()=>void
    addPost: ()=>void
    updateNewPost: (newPostText: string)=>void
    subscribe:(observer:()=>void)=>void

}
export let store:StoreType = {
    _State:  {
    profilePage: {
        myPostData: [
            { id: 1, likesCount: 2, message: 'its test message ' },
            { id: 2, likesCount: 5, message: 'try props ' },
            { id: 3, likesCount: 1, message: 'its worked ' },
            { id: 4, likesCount: 12, message: 'yo ' }
        ],
        newPostText: 'test string'
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

},
getState() {
    return this._State;
},
_callSubscriber()  {
    console.log('state changed');  
},
addPost() {
    const newPost = {
        id: 6,
        likesCount: 0,
        message: this._State.profilePage.newPostText
    }
    this._State.profilePage.myPostData.push(newPost);
    this._callSubscriber();
    this._State.profilePage.newPostText = '';
},
updateNewPost(newPostText: string) {
    this._State.profilePage.newPostText = newPostText;
    this._callSubscriber();
},
subscribe(observer:()=>void) {
    this._callSubscriber = observer;
},
}