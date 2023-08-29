import React from 'react';
import './App.css';
import { Header } from './layout/components/Header/Header';
import { NavBar } from './layout/components/NavBar/NavBar';
import { Profile } from './layout/components/Profile/Profile';
import { styled } from 'styled-components';


const App = () => {
  return (
    <AppWrapper className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  
`