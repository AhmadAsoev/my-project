import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ModalState>
      <StrictMode>
        <App />
      </StrictMode>
    </ModalState>
  </BrowserRouter>
);
