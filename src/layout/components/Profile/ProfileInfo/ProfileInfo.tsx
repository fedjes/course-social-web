import React from 'react';
import { styled } from 'styled-components';
import { GetProfileType } from '../ProfileContainer';
import { Loader } from '../../Users/UsersContainer';


type ProfileInfoPropsType = {
  profile: GetProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({ profile }) => {
  if(!profile) {
    return (
      <Loader />
    )
  }
  return (
    <ContentWrapper>
      <ContentWrapper>
        <ContentImg src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt="content" />
      </ContentWrapper>
      <AvaDiscription>
        <img src={profile?.photos.large} alt="largePhoto" />
        <div>
          {profile?.aboutMe}
        </div>
        <div>{profile?.fullName}</div>
        {profile?.lookingForAJob ? 'fiend job .' : 'not need job .'}
        {profile?.lookingForAJobDescription}
      </AvaDiscription>
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

