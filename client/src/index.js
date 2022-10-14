import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './home.css';
import './nav.css';
import './booking.css';
import './aboutd.css';
import './activity.css';
import './login.css';
import './doclist.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


