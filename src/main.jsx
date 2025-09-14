import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './Components/Pages/Home.jsx';
import SearchbarContent from './Components/Pages/searchbarContent';

import './style/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      {path: 'search', element: <SearchbarContent />},
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
