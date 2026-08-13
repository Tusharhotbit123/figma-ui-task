import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavProvider } from './context/navContext/Navcontext.tsx';
import { ImageProvider } from './context/imageContext/ImageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ImageProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </ImageProvider>
    </Router>
  </StrictMode>,
);
