import React, { ChangeEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { Post } from './Post/Post';
import { MyPostDataType, ProfilePageType } from '../../../../redux/state';
import { addPostAC, onChangeTextAreaAC } from '../../../../redux/profile-reducer';
import { useSelector } from 'react-redux';
import { RootStateType, store } from '../../../../redux/redux-store';



type MyPostsPropsType = {
  // myPostData: MyPostDataType[]
  // addPost: () => void
  // newPostText: string
  // updateNewPost: (newPostText: string) => void
  // dispatch: (action: any) => void
  updateNewTextAreaText: (text: string) => void
  updateAddPost: () => void
  posts: ProfilePageType
}




export const MyPosts: React.FC<MyPostsPropsType> = (props) => {



  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const onAddPost = () => {
    // store.dispatch(addPostAC());
    props.updateAddPost();
  }

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let textFromTexArea = e.currentTarget.value;
    // let action = onChangeTextAreaAC(textFromTexArea);
    // store.dispatch(action);
    props.updateNewTextAreaText(textFromTexArea)
  }

  const myPostsElement = props.posts.myPostData.map(mp => <Post key={mp.id} message={mp.message} id={mp.id} likesCount={mp.likesCount} />)


  return (
    <ContentWrapperPosts>
      My post
      <ContentWrapper>
        <MyPostTextarea ref={newPostElement}
          onChange={onChangeTextArea}
          value={props.posts.newPostText}
        />
        <MyPostButtonAdd onClick={onAddPost}>add post</MyPostButtonAdd>
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