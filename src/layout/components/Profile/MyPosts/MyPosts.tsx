import React from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';




export const MyPosts = () => {
  return (
    <ContentWrapperPosts>
      My post
      <ContentWrapper>
        <MyPostTextarea></MyPostTextarea>
        <MyPostButtonAdd>add post</MyPostButtonAdd>
      </ContentWrapper>
      <ContentNewPost>New Post</ContentNewPost>
      <ContentWrapper>
        <Post message='its test message ' like={2} />
        <Post message='try props ' like={5} />
        <Post message='its worked ' like={1} />
      </ContentWrapper>
    </ContentWrapperPosts>
  )
}


const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
`

const ContentWrapperPosts = styled.div`
  padding: 10px;
`
const ContentNewPost = styled.div`
  
`

const MyPostTextarea = styled.textarea`
  width: 100%;
`
const MyPostButtonAdd = styled.button`
  
`