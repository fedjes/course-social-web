import React from 'react';
import { styled } from 'styled-components';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../../redux/state';


type ProfilePropsType = {
  state: ProfilePageType
  // addPost: () => void
  // updateNewPost: (newPostText: string) => void
  dispatch:(action:any)=>void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {


  return (
    <div>
      <ProfileInfo />
      <MyPosts myPostData={props.state.myPostData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
        // updateNewPost={props.updateNewPost}
         />
    </div>
  )
}


const ContentWrapperPosts = styled.div`
  
`
const ContentNewPost = styled.div`
  
`
const ContentPost = styled.div`
  
`