import React from 'react';
import { styled } from 'styled-components';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { myPostDataType } from '../../..';

type ProfilePropsType = {
  myPostData: myPostDataType[]
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
  // const myPostData = [
  //   { id: 1, likesCount: 2, message: 'its test message ' },
  //   { id: 2, likesCount: 5, message: 'try props ' },
  //   { id: 3, likesCount: 1, message: 'its worked ' },
  //   { id: 4, likesCount: 12, message: 'yo ' }
  // ]
  return (
    <div>
      <ProfileInfo />
      <MyPosts myPostData={props.myPostData}/>
    </div>
  )
}


const ContentWrapperPosts = styled.div`
  
`
const ContentNewPost = styled.div`
  
`
const ContentPost = styled.div`
  
`