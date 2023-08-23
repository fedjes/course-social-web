import React from 'react';
import './App.css';
import { Header } from './layout/components/Header/Header';
import { NavBar } from './layout/components/NavBar/NavBar';
import { Profile } from './layout/components/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
