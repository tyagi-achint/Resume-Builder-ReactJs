import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Personal from './components/Personal/Personal';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';


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
        path: 'personal',
        element: <Personal currentPage="Personal" />
      },
      {
        path: 'education',
        element: <Education currentPage="Education" />
      }
      ,
      {
        path: 'experience',
        element: <Experience currentPage="Experience" />
      },
      {
        path: 'projects',
        element: <Projects currentPage="Projects" />
      },
      {
        path: 'skills',
        element: <Skills currentPage="Skills" />
      },
      {
        path: 'resume',
        element: <Resume currentPage="Resume" />
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
