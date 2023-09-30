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
import { StateType } from './redux/state';



type AppPropsType = {
  state: StateType
  addPost: (messagePost: string) => void
}




const App: React.FC<AppPropsType> = (props) => {

  return (
    <AppWrapper className="app-wrapper">
      <Header />
      <NavBar />
      <StyledContent>
        <Route path='/Profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />

        <Route path='/Dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
        {/* <Route path='/Dialogs' render={() => <Dialogs dialogsMessagesData={props.state.messagesPage.dialogsMessagesData} dialogs={props.state.messagesPage.dialogs}/>} /> */}
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