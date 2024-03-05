import React from 'react';                      //Core foundational library
import ReactDOM from 'react-dom/client';        // Implementation for web
import './index.css';
import App from './App';    // App.js


const root = ReactDOM.createRoot(document.getElementById('root'));    //creates a virtual DOM
root.render(                                                          //render a page
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// App function is being rendered
// <React.StrictMode> : property of react/ react sfe mode (for production/ optimisation purposes)
// <App /> is the JSX file
