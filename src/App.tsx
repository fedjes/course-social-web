import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Technology } from './layout/components/technology/Technology';
import { Footer } from './layout/footer/Footer';

const App = () => {
  return (
    <div className="App">
     Hello, samurai! Let's go!
     <Header />
     <Technology />
     <Footer />
    </div>
  );
}

export default App;
