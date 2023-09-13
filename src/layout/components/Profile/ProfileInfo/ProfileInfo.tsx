import React from 'react';
import { styled } from 'styled-components';


export const ProfileInfo = () => {
  return (
    <ContentWrapper>
      <ContentWrapper>
        <ContentImg src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt="content" />
      </ContentWrapper>
      <AvaDiscription>ava+description</AvaDiscription>
    </ContentWrapper>
  )
}


const ContentWrapper = styled.div`
 
`

const ContentImg = styled.img`
  width: 800px;
`

const AvaDiscription = styled.div`
   padding: 10px;
`

