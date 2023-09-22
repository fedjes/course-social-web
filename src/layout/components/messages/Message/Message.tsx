import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';


export type MessagePropsType = {
    content: string
    id: number
}

export const MessageComponents: React.FC<MessagePropsType> = ({ content }) => {
    return (
        <Message>
            {content}
        </Message>
    )
}

const Message = styled.div`
    
`

