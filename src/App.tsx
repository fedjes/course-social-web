import React from 'react';
import './App.css';
import { Header } from './layout/components/Header/Header';
import { NavBar } from './layout/components/NavBar/NavBar';
import { Profile } from './layout/components/Profile/Profile';
import { styled } from 'styled-components';
import { Dialogs } from './layout/components/messages/Dialogs';


const App = () => {
  return (
    <AppWrapper className="app-wrapper">
      <Header />
      <NavBar />
      <StyledContent>
      {/* <Profile /> */}

      <Dialogs />
      </StyledContent>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  
`

const StyledContent = styled.div`
  grid-area: c;
  background-color: #32a189;
`