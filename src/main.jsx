import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

import { ReduxProvider } from '@app/ReduxProvider.jsx';

import ToastProvider from '@shared/toastify/ToastProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <ToastProvider />
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
