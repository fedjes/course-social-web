import React from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';
import { myPostDataType } from '../../../..';



type MyPostsPropsType = {
  myPostData: myPostDataType[]
}

// type myPostData = {
//   id: number
//   likesCount: number
//   message: string
// }

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {
  // const myPostData = [
  //   { id: 1, likesCount: 2, message: 'its test message ' },
  //   { id: 2, likesCount: 5, message: 'try props ' },
  //   { id: 3, likesCount: 1, message: 'its worked ' },
  //   { id: 4, likesCount: 12, message: 'yo ' }
  // ]

  const myPostsElement = props.myPostData.map(mp => <Post message={mp.message} id={mp.id} likesCount={mp.likesCount} />)
  return (
    <ContentWrapperPosts>
      My post
      <ContentWrapper>
        <MyPostTextarea></MyPostTextarea>
        <MyPostButtonAdd>add post</MyPostButtonAdd>
      </ContentWrapper>
      <ContentNewPost>New Post</ContentNewPost>
      <ContentWrapper>
        {myPostsElement}
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