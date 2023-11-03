import React, { ChangeEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { MessagesPageType } from '../../../redux/state';
import { RootStateType, store } from '../../../redux/redux-store';
import { sendMessageAC, updateNewMessageAC } from '../../../redux/messages-reducer';
import { connect, useSelector } from 'react-redux';
import { Dialogs } from './Dialogs';



type DialogsContainerPropsType = {
    // state: MessagesPageType
    // dispatch:(action:any)=>void
}

// export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
//     const messagePage = useSelector<RootStateType, MessagesPageType>(state => state.messagePage)
//     // const dialogsElement = messagePage.dialogs.map(d => <DialogItemComponent name={d.name} id={d.id} />)

//     // const newMessageElement = useRef<HTMLTextAreaElement>(null)
//     const addMessage = () => {
//         store.dispatch(sendMessageAC())
//     }

//     // const messages = messagePage.dialogsMessagesData.map(m => <MessageComponents content={m.message} id={m.id} />)

//     const onChangeMessageTextArea = (text: string) => {

//         store.dispatch(updateNewMessageAC(text))
//     }

//     return (
//         <Dialogs
//             updateMessageTextArea={onChangeMessageTextArea}
//             sendMessaage={addMessage}
//             messagePageData={messagePage}
//         />
//     )
// }


//connect
const mapStateToProps = () => {
    return {
        messagePageData: store.getState().messagePage,
    }
}

const mapStateDispatchToProps = () => {
    return {
        updateMessageTextArea: (text: string) => { store.dispatch(updateNewMessageAC(text)) },
        sendMessaage: () => { store.dispatch(sendMessageAC()) }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapStateDispatchToProps)(Dialogs);