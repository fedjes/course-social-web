import React from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <ContentWrapperPosts>
            My post
            <ContentWrapperPosts>
                <MyPostTextarea></MyPostTextarea>
                <MyPostButtonAdd>add post</MyPostButtonAdd>
            </ContentWrapperPosts>
            <ContentNewPost>New Post</ContentNewPost>
            <ContentWrapper>
               <Post message='its test message ' like={2}/>
               <Post message='try props ' like={5}/>
               <Post message='its worked ' like={1}/>
            </ContentWrapper>
        </ContentWrapperPosts>
    )
}

const StyledContent = styled.div`
  grid-area: c;
  background-color: #32a189;
`

const ContentWrapper = styled.div`
  
`

const ContentImg = styled.img`
  width: 800px;
`

const AvaDiscription = styled.div`
  
`
const ContentWrapperPosts = styled.div`
  
`
const ContentNewPost = styled.div`
  
`
const ContentPost = styled.div`
  
`
const MyPostTextarea = styled.textarea`
  
`
const MyPostButtonAdd = styled.button`
  
`