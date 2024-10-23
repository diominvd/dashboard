import React from 'react';
import ReactDOM from 'react-dom/client';

// Custom components;
import App from '@app/App.tsx';
// Included styles;
import './main.scss';
import '@theme/_dark.scss';
import '@theme/_colors.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
