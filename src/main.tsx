import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ButtonRoute from './Button/route';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/button', element: <ButtonRoute /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
