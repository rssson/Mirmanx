import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { router } from './App.jsx'
import Login from './Login'
import { RouterProvider} from 'react-router-dom'
import './index.css'
import Sidebar from './Sidebar.jsx'
import Testing from './Testing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
