import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import './style.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
