import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavProvider } from './context/navContext/Navcontext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <NavProvider>
        <App />
      </NavProvider>
    </Router>
  </StrictMode>,
);
