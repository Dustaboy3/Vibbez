import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './js/Footer'; //import component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
