import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Home from './components/Home';
import './components/style.css';
const linkTarget = "_blank";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Footer target={linkTarget} />
  </React.StrictMode>
);

