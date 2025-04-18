
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '../store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <App 
      state={store.getState()} 
      dispatch={store.dispatch} 
    />
  );
};

render();
store.subscribe(render);

