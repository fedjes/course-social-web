import React from 'react';
import { styled } from 'styled-components';

type PostPropsType = {
    message: string
    like: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <WrapperPosts>
            <PostImg src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' alt='avaUser' />
            {props.message}
            <PostLikes>like{props.like}</PostLikes>
        </WrapperPosts>

    )
}

const WrapperPosts = styled.div`
  
`


const PostImg = styled.img`
    width: 50px;
`

const PostLikes = styled.span`
   
`