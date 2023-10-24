import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import router from './router.js';
import { Blogs, Contacts, Courses, Home } from './Pages';

const router = createBrowserRouter([
  {
      path: '/', element: <App />,
      children: [
          { path: '', element: <Home /> },
          { path: 'courses', element: <Courses /> },
          { path: 'blogs', element: <Blogs /> },
          { path: 'contact', element: <Contacts /> },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
