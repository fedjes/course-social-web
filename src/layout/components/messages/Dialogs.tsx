import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

type DialogsPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    content: string
}

const DialogItemComponent: React.FC<DialogsPropsType> = ({ name, id }) => {
    return (
        <DialogItem>
            <DialogUserName to={'/Dialogs/' + id}>{name}</DialogUserName>
        </DialogItem>
    )
}

const MessageComponents: React.FC<MessagePropsType> = ({content}) => {
    return (
        <Message>
            {content}
        </Message>
    )
}

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogItems>
                <DialogItemComponent name='felis' id='1' />
                <DialogItemComponent name='test' id='2' />
                <DialogItemComponent name='fedjes' id='3' />
                <DialogItemComponent name='moreUser' id='4' />
            </DialogItems>
            <Messages>
                <MessageComponents content='test'/>
                <MessageComponents content='test test'/>
                <MessageComponents content='test test test'/>
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