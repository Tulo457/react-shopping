import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const navbar = ReactDOM.createRoot(document.getElementById('navbar'));


navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
