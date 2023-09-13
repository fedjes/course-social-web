import React from 'react';
import './App.css';
import { Header } from './layout/components/Header/Header';
import { NavBar } from './layout/components/NavBar/NavBar';
import { Profile } from './layout/components/Profile/Profile';
import { styled } from 'styled-components';
import { Dialogs } from './layout/components/messages/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './layout/components/News/News';
import { Music } from './layout/components/Music/Music';
import { Settings } from './layout/components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper className="app-wrapper">
        <Header />
        <NavBar />
        <StyledContent>
          <Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </StyledContent>
      </AppWrapper>
    </BrowserRouter>

  );
}

export default App;

const AppWrapper = styled.div`
  
`

const StyledContent = styled.div`
  grid-area: c;
  background-color: #32a189
`