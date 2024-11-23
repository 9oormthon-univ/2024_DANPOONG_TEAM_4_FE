import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

import { ReduxProvider } from '@app/ReduxProvider.jsx';

import ToastProvider from '@shared/toastify/ToastProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ReduxProvider>
      <ToastProvider />
      <App />
    </ReduxProvider>
  </BrowserRouter>,
);
