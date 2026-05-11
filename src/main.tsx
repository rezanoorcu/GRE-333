import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register the service worker
registerSW({ 
  onNeedRefresh() {
    console.log('App content updated. Please refresh.');
  },
  onOfflineReady() {
    console.log('App is ready for offline use.');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
