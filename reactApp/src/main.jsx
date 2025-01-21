import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppHard from './AppHard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHard />
  </StrictMode>,
);
