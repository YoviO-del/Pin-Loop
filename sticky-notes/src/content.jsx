import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// 1. Create a div to hold your notes on the webpage
const rootElement = document.createElement('div');
rootElement.id = 'task-pin-container';

// 2. Ensure the container covers the screen but doesn't block clicks
Object.assign(rootElement.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none', // Allows clicking through to the website
  zIndex: '999999'
});

document.body.appendChild(rootElement);

// 3. Render your React app with HashRouter (required for react-router-dom)
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* We use a div wrapper with pointer-events: auto so notes are clickable */}
      <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);