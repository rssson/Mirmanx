import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login.js'
import AI from './AI.js'
import Home from './Home.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals.js';
import Sidebar from './Sidebar.js';
import Assignments from './Assignments.js';
import Assign from './Assign.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },{
    path: "/ai",
    element: <AI />
  },{
    path: '/dashboard',
    element: <Home />
  },{
    path: "/login",
    element: <Login />
  },{
    path: '/sidebar',
    element: <Sidebar />
  },{
    path: '/assignments',
    element: <Assignments />
  },{
    path: '/assignments/new',
    element: <Assign />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
