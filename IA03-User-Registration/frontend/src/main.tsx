import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <Login /> },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
