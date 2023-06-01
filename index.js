import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './components/Navigation';
import Appetizers from './components/Appetizers';
import Mains from './components/Mains';
import Sweets from './components/Sweets';
import BookNow from './components/BookNow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Appetizers />
    <Mains />
    <Sweets />
    <BookNow />
  </React.StrictMode>
);

