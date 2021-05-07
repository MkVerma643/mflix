import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './reduxstore/store';
import mart from './reduxstore/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mart}>
     <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
