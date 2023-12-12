import { GetProfileType } from "../layout/components/Profile/ProfileContainer"
import { messagesReducer } from "./messages-reducer"
import { profileReducer } from "./profile-reducer"


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
    profile: GetProfileType | null
    status: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    dialogsMessagesData: DialogsMessagesDataType[]
    newMessageText: string

}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type StoreType = {
    _State: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

export type UsersType = {
    users: usersTypeWithLocation[]
    pageSize: number
    userCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type usersTypeWithLocation = {
    followed: boolean
    id: number
    name: string
    status: string
    photos: PhotoType
    // location: locationUsersType
}

export type PhotoType = {
    small: string
    large: string
}

type locationUsersType = {
    city: string
    country: string
}
// let store: StoreType = {
//     _State: {
//         profilePage: {
//             myPostData: [
//                 { id: 1, likesCount: 2, message: 'its test message ' },
//                 { id: 2, likesCount: 5, message: 'try props ' },
//                 { id: 3, likesCount: 1, message: 'its worked ' },
//                 { id: 4, likesCount: 12, message: 'yo ' }
//             ],
//             newPostText: 'test string'
//         },
//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: 'felis' },
//                 { id: 2, name: 'test' },
//                 { id: 3, name: 'fedjes' },
//                 { id: 4, name: 'moreUser' },
//             ],
//             dialogsMessagesData: [
//                 { id: 1, message: 'test' },
//                 { id: 2, message: 'test test' },
//                 { id: 3, message: 'test test test' },
//                 { id: 4, message: 'yo' },
//             ],
//             newMessageText: 'its test message'
//         },

//     },
//     getState() {
//         return this._State;
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action: any) {

//         this._State.profilePage = profileReducer(this._State.profilePage, action);
//         this._State.messagesPage = messagesReducer(this._State.messagesPage, action);
//         this._callSubscriber();
//     }
// }

