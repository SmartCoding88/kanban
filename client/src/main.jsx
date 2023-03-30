import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//react router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Login from './components/Login'
import Task from './components/Task'
import Comments from './components/Comments'

const router= createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/comments/:category/:id",
    element: <Comments />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
