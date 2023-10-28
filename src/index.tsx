import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store } from './redux/redux-store';
// import { BrowserRouter } from 'react-router-dom';
// import { StateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// type RerenderEntireTreeType = {
//   state: StateType
// }

const rerenderEntireTree = () => {
  ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App
        // dispatch={store.dispatch.bind(store)}
        />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root')
  );
}

rerenderEntireTree(); //store.getState()

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree();
});
