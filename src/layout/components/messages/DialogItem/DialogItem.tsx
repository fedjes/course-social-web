import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

type DialogsPropsType = {
    name: string
    id: number
}


export const DialogItemComponent: React.FC<DialogsPropsType> = ({ name, id }) => {
    return (
        <DialogItem>
            <DialogUserName to={'/Dialogs/' + id}>{name}</DialogUserName>
        </DialogItem>
    )
}

const DialogItem = styled.div`
    
`

const DialogUserName = styled(NavLink)`
    text-decoration: none;
    color: white;
      &.active {
        color: red
      }
`