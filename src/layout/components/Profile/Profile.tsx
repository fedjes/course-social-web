import React from 'react';
import { styled } from 'styled-components';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileContainerType } from './ProfileContainer';



type ProfilePropsType = {
  // state: ProfilePageType
  // addPost: () => void
  // updateNewPost: (newPostText: string) => void
  // dispatch:(action:any)=>void
  
}

export const Profile: React.FC<ProfileContainerType> = (props) => {

  
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}


const ContentWrapperPosts = styled.div`
  
`
const ContentNewPost = styled.div`
  
`
const ContentPost = styled.div`
  
`