import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';

createRoot(document.getElementById('root')!).render(
  <ModalState>
    <StrictMode>
      <App />
    </StrictMode>
  </ModalState>
);
