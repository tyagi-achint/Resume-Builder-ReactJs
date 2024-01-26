import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'personalInfo',
        element: <PersonalInfo currentPage="Personal Infomation" />
      }
    ]


  }
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
