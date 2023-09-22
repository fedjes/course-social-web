import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type myPostDataType = {
  id:number
  likesCount:number
  message: string
}
export type dialogsMessagesDataType = {
  id:number
  message: string
}
export type dialogsType  = {
  id:number
  name: string
}
const myPostData:myPostDataType[] = [
  { id: 1, likesCount: 2, message: 'its test message ' },
  { id: 2, likesCount: 5, message: 'try props ' },
  { id: 3, likesCount: 1, message: 'its worked ' },
  { id: 4, likesCount: 12, message: 'yo ' }
]

const dialogsMessagesData:dialogsMessagesDataType[] = [
  { id: 1, message: 'test' },
  { id: 2, message: 'test test' },
  { id: 3, message: 'test test test' },
  { id: 4, message: 'yo' },
]

const dialogs:dialogsType[] = [
  { id: 1, name: 'felis' },
  { id: 2, name: 'test' },
  { id: 3, name: 'fedjes' },
  { id: 4, name: 'moreUser' },
]


ReactDOM.render(
    <App dialogsMessagesData={dialogsMessagesData} dialogs={dialogs} myPostData={myPostData}/>,
  document.getElementById('root')
);