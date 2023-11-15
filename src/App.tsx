import React, { FC } from 'react';
import './App.css';
import { Header } from './layout/components/Header/Header';
import { NavBar } from './layout/components/NavBar/NavBar';
import { Profile } from './layout/components/Profile/Profile';
import { styled } from 'styled-components';

import { Route } from 'react-router-dom';
import { News } from './layout/components/News/News';
import { Music } from './layout/components/Music/Music';
import { Settings } from './layout/components/Settings/Settings';
import { DialogsContainer } from './layout/components/messages/DialogsContainer';
import { Users } from './layout/components/Users/Users';
import { UsersContainer } from './layout/components/Users/UsersContainer';




type AppPropsType = {
  // state: RootStateType
  // addPost: () => void
  // updateNewPost: (newPostText: string) => void
  // dispatch: (action: void) => void
}

const App: FC<AppPropsType> = () => {

  return (
    <AppWrapper className="app-wrapper">
      <Header />
      <NavBar />
      <StyledContent>
        <Route path='/Profile' render={() => <Profile/>} />
        <Route path='/Dialogs' render={() => <DialogsContainer/>} />
        <Route path='/Users' render={() => <UsersContainer />} />


        <Route path='/News' render={() => < News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </StyledContent>
    </AppWrapper>

  );
}

export default App;

const AppWrapper = styled.div`
  
`

const StyledContent = styled.div`
  grid-area: c;
  background-color: #32a189
`