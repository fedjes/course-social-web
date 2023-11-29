import React, { ChangeEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { MessagesPageType } from '../../../redux/state';
import { RootStateType, store } from '../../../redux/redux-store';
import { sendMessageAC, updateNewMessageAC } from '../../../redux/messages-reducer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export type DialogsPropsType = {
    // state: MessagesPageType
    // dispatch:(action:any)=>void
    updateMessageTextArea: (text: string) => void
    sendMessaage: () => void
    messagePageData: MessagesPageType
    // isAuth: boolean | null
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    // const messagePage = useSelector<RootStateType, MessagesPageType>(state => state.messagePage)
    const dialogsElement = props.messagePageData.dialogs.map(d => <DialogItemComponent key={d.id} name={d.name} id={d.id} />);

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        const messageText = newMessageElement.current?.value
        if (messageText) {
            props.sendMessaage();
        }  
    }

    const messages = props.messagePageData.dialogsMessagesData.map(m => <MessageComponents key={m.id} content={m.message} id={m.id} />);

    const onChangeMessageTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        props.updateMessageTextArea(newMessageText);
    }
    // if(props.isAuth === false) {
    //     return <Redirect to={'/Login'}/>
    // }
    return (
        <StyledDialogs>
            <DialogItems>
                {dialogsElement}
            </DialogItems>
            <Messages>
                {messages}
            </Messages>
            <div>
                <TextArea
                    ref={newMessageElement}
                    value={props.messagePageData.newMessageText}
                    placeholder='enter message'
                    onChange={onChangeMessageTextArea}
                ></TextArea>
                <ButtonDialogs onClick={addMessage}>add mes</ButtonDialogs>
            </div>
        </StyledDialogs>
    )
}


const StyledDialogs = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
`

const DialogItems = styled.div`
    padding: 10px;
`
const DialogItem = styled.div`
    
`

const Messages = styled.div`
    padding: 10px;
`
const Message = styled.div`
    
`


const TextArea = styled.textarea`
    
`
const ButtonDialogs = styled.button`
    
`