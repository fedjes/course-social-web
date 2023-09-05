import React from 'react';
import { styled } from 'styled-components';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
  return (
    <div>
      <ContentWrapper>
        <ContentImg src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt="content" />
      </ContentWrapper>
      <AvaDiscription>ava+description</AvaDiscription>
      <MyPosts />
    </div>
  )
}

// const StyledContent = styled.div`
//   grid-area: c;
//   background-color: #32a189;
// `

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