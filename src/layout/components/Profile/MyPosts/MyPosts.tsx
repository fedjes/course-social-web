import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';
import { myPostDataType } from '../../../../redux/state';





type MyPostsPropsType = {
  myPostData: myPostDataType[]
  addPost: (messagePost: string) => void
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
  const newPostElement = useRef<HTMLTextAreaElement>(null)
  const addPostH = () => {
    const ptostText = newPostElement.current?.value
    if(ptostText) {
      props.addPost(ptostText)
    }
  }
  const myPostsElement = props.myPostData.map(mp => <Post message={mp.message} id={mp.id} likesCount={mp.likesCount} />)
  return (
    <ContentWrapperPosts>
      My post
      <ContentWrapper>
        <MyPostTextarea ref={newPostElement}></MyPostTextarea>
        <MyPostButtonAdd onClick={addPostH}>add post</MyPostButtonAdd>
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