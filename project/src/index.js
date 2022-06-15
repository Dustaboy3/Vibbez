import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './js/Footer'; //import component
import Header from './js/Header';
import Content from './js/Content';
import reportWebVitals from './reportWebVitals';

const content = ReactDOM.createRoot(document.getElementById('content'));
const header = ReactDOM.createRoot(document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

content.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
