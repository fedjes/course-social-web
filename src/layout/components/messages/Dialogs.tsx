import React, { ChangeEvent, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { MessagesPageType } from '../../../redux/state';
import { store } from '../../../redux/state';
import { sendMessageAC, updateNewMessageAC } from '../../../redux/messages-reducer';


type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElement = props.state.dialogs.map(d => <DialogItemComponent name={d.name} id={d.id} />)

    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        const messageText = newMessageElement.current?.value
        if(messageText) {
            store.dispatch(sendMessageAC())
        }
    }

    const messages = props.state.dialogsMessagesData.map(m => <MessageComponents content={m.message} id={m.id} />)

    const onChangeMessageTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        store.dispatch(updateNewMessageAC(newMessageText))

    }

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
                    value={props.state.newMessageText}
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

const DialogUserName = styled(NavLink)`
    text-decoration: none;
    color: white;
      &.active {
        color: red
      }
`

const TextArea = styled.textarea`
    
`
const ButtonDialogs = styled.button`
    
`