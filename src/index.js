import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Samuel from './Samuel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import 'bootstrap/dist/js/bootstrap.esm.min';
// import 'bootstrap/dist/js/bootstrap.min';

import './App.css';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('head')
);

ReactDOM.render(
  <React.StrictMode>
    <Samuel />
  </React.StrictMode>,
  document.getElementById('sam')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
