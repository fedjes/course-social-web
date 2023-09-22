import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { DialogItemComponent } from './DialogItem/DialogItem';
import { MessageComponents } from './Message/Message';
import { dialogsMessagesDataType, dialogsType } from '../../..';


type DialogsPropsType = {
    dialogsMessagesData: dialogsMessagesDataType[]
    dialogs: dialogsType[]
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {
    //dialogs 
    // const dialogs = [
    //     { id: 1, name: 'felis' },
    //     { id: 2, name: 'test' },
    //     { id: 3, name: 'fedjes' },
    //     { id: 4, name: 'moreUser' },
    // ]

    const dialogsElement = props.dialogs.map(d => <DialogItemComponent name={d.name} id={d.id} />)
    //messages
    // const dialogsMessagesData = [
    //     { id: 1, message: 'test' },
    //     { id: 2, message: 'test test' },
    //     { id: 3, message: 'test test test' },
    //     { id: 4, message: 'yo' },
    // ]

    const messages = props.dialogsMessagesData.map( m => <MessageComponents content={m.message} id={m.id} />)

    return (
        <StyledDialogs>
            <DialogItems>
                {dialogsElement}
            </DialogItems>
            <Messages>
                {messages}
            </Messages>
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