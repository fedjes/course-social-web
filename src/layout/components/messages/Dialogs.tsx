import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { MessagesPageType } from '../../../redux/state';



type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    //dialogs 
    // const dialogs = [
    //     { id: 1, name: 'felis' },
    //     { id: 2, name: 'test' },
    //     { id: 3, name: 'fedjes' },
    //     { id: 4, name: 'moreUser' },
    // ]

    const dialogsElement = props.state.dialogs.map(d => <DialogItemComponent name={d.name} id={d.id} />)
    //messages
    // const dialogsMessagesData = [
    //     { id: 1, message: 'test' },
    //     { id: 2, message: 'test test' },
    //     { id: 3, message: 'test test test' },
    //     { id: 4, message: 'yo' },
    // ]
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
      const messageText = newMessageElement.current?.value
      alert(messageText)
    }
    const messages = props.state.dialogsMessagesData.map(m => <MessageComponents content={m.message} id={m.id} />)

    return (

        <StyledDialogs>
            <DialogItems>
                {dialogsElement}
            </DialogItems>
            <Messages>
                {messages}
            </Messages>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>add mes</button>
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