import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

//The Provider is a component class that we get from react redux and we need to pass to it the
//store object so that we can have context to the rest of the application
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
