import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const MemoizedApp = React.memo(App); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoizedApp />
  </React.StrictMode>
);
