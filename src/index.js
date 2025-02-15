import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js/dist/umd/popper'
import  NavBar  from './NavBar';
import App from './App'
import { BrowserRouter } from "react-router-dom";

// var element=<App/>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);