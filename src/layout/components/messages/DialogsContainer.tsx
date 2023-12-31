import React, { ChangeEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { MessagesPageType } from '../../../redux/state';
import { RootStateType, StoreDispatch, store } from '../../../redux/redux-store';
import { sendMessageAC, updateNewMessageAC } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';
import { Dialogs, DialogsPropsType } from './Dialogs';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';



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


const mapStateToProps = (state: RootStateType) => {
    return {
        messagePageData: state.messagePage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateMessageTextArea: updateNewMessageAC,
        sendMessaage: sendMessageAC,
    }),
    withAuthRedirect
)(Dialogs)

//connect




// const mapStateDispatchToProps = (dispatch: StoreDispatch) => {
//     return {
//         updateMessageTextArea: (text: string) => { dispatch(updateNewMessageAC(text)) },
//         sendMessaage: () => { dispatch(sendMessageAC()) }
//     }
// }
// const authRedirectComponent = withAuthRedirect(Dialogs)
// const authRedirectComponent = (props:DialogsPropsType) => {
//     if(props.isAuth === false) {
//         return <Redirect to={'/Login'} />
//     }
//     return <Dialogs {...props}/>
// }

// export const DialogsContainer = connect(mapStateToProps, {
//     updateMessageTextArea: updateNewMessageAC,
//     sendMessaage: sendMessageAC,
// })(authRedirectComponent);