import React, { ChangeEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';
import { MyPostDataType } from '../../../../redux/state';



type MyPostsPropsType = {
  myPostData: MyPostDataType[]
  addPost: () => void
  newPostText: string
  updateNewPost: (newPostText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  const newPostElement = useRef<HTMLTextAreaElement>(null)
  const addPostH = () => {
    props.addPost();
  }
  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textFromTexArea = e.currentTarget.value;
    props.updateNewPost(textFromTexArea);

  }
  const myPostsElement = props.myPostData.map(mp => <Post key={mp.id} message={mp.message} id={mp.id} likesCount={mp.likesCount} />)
  return (
    <ContentWrapperPosts>
      My post
      <ContentWrapper>
        <MyPostTextarea ref={newPostElement}
          onChange={onChangeTextArea}
          value={props.newPostText}
        />
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