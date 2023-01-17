import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import pageReducer  from './features/page';
import userReducer from './features/user'

const store=configureStore({
  reducer:{
    page:pageReducer,
    user:userReducer,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
